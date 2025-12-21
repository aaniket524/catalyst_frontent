import React, { useEffect, useState } from "react";
import './style.css';
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import AllPageHeader from "../../Components/AllPageHeader"; // adjust path if needed
import DesignSolution from "../../Components/DesignSolution";

// Card component — shows only one level
function ServiceCard({ service }) {
    return (
        <div className="designsolution-grid1">
            {/* <div className="ds-g-image">
                <img
                    src={`http://127.0.0.1:8000${service.thumbimg}`}
                    alt={service.title}
                    className="ds-g-img img-fluid"
                />
            </div> */}

            <h4 className="ds-g-title">{service.title}</h4>
            <p className="ds-g-desc">{service.shortdesc}</p>
            

            <Link to={`/our-services/${service.fullPath}`}>
                <img
                    src={`http://127.0.0.1:8000${service.redirecticon}`}
                    className="redirect-icon img-fluid"
                    alt="Go"
                />
            </Link>
        </div>
    );
}

function ServiceHierarchyPage() {
    const location = useLocation();
    const [service, setService] = useState(null);
    const [breadcrumb, setBreadcrumb] = useState([]);

    // Generate fullPath recursively
    function addFullPath(serviceItem, parentPath = "") {
        serviceItem.fullPath = parentPath ? `${parentPath}/${serviceItem.slug}` : serviceItem.slug;

        if (serviceItem.children) {
            serviceItem.children = serviceItem.children.map(child =>
                addFullPath(child, serviceItem.fullPath)
            );
        }

        return serviceItem;
    }

    // Find service by slug path array
    function findServiceBySlugPath(services, pathArray) {
        if (!pathArray.length) return null;

        const [currentSlug, ...rest] = pathArray;
        const currentService = services.find(s => s.slug === currentSlug);
        if (!currentService) return null;

        if (rest.length === 0) return currentService;
        return currentService.children
            ? findServiceBySlugPath(currentService.children, rest)
            : null;
    }

    // Generate breadcrumb array with actual hierarchy
    function generateBreadcrumb(allServices, slugPathArray) {
        const crumbs = [
            { title: "Home", path: "/" },
            { title: "Our Services", path: "/our-services" }
        ];

        let currentServices = allServices;
        let accumulatedPath = "our-services";

        slugPathArray.forEach(slug => {
            const s = currentServices.find(service => service.slug === slug);
            if (s) {
                accumulatedPath += `/${s.slug}`;
                crumbs.push({ title: s.title, path: `/${accumulatedPath}` });
                currentServices = s.children || [];
            }
        });

        return crumbs;
    }

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/backend/multiservice/');
                const allServices = response.data.map(s => addFullPath(s));

                // Convert current URL path into array of slugs
                const slugPathArray = location.pathname
                    .replace('/our-services/', '')
                    .split('/')
                    .filter(Boolean);

                const currentService =
                    slugPathArray.length === 0
                        ? { title: "Our Services", shortdesc: "", children: allServices }
                        : findServiceBySlugPath(allServices, slugPathArray);

                setService(currentService);
                setBreadcrumb(generateBreadcrumb(allServices, slugPathArray));
            } catch (error) {
                console.error("Failed to fetch services:", error);
                setService(null);
            }
        };

        fetchService();
    }, [location]);

    if (!service) return <p>Loading...</p>;

    // Generate breadcrumb string for AllPageHeader
    const breadcrumbString = breadcrumb.map(b => b.title).join(' / ');

    return (
        <div className="servicepage">
            {/* Pass dynamic breadcrumb to your existing header */}
            <AllPageHeader 
                title={service.title} 
                breadcrumb={breadcrumbString} 
            />
            

            <p className="aboutsubservice" >{service.shortdesc}</p>
            {service.fulldesc && service.fulldesc.trim() !== "" && (
                <p
                    className="fulldescript"
                    dangerouslySetInnerHTML={{ __html: service.fulldesc }}
                />
            )}
            {[
                service.fulldesc1,
                service.fulldesc2,
                service.fulldesc3,
                service.fulldesc4,
                service.fulldesc5,
                service.fulldesc6,
            ].some(desc => desc) && (
                <div className="subcards">
                    {[
                        service.fulldesc1,
                        service.fulldesc2,
                        service.fulldesc3,
                        service.fulldesc4,
                        service.fulldesc5,
                        service.fulldesc6,
                    ]
                        .filter(desc => desc && desc.trim() !== "")
                        .map((desc, index) => (
                            <div className="subcard-main" key={index}>
                                <p
                                    className="fulldescript"
                                    dangerouslySetInnerHTML={{ __html: desc }}
                                />
                            </div>
                        ))}
                </div>
            )}


            {service.children && service.children.length > 0 && (
                <div className="designsolution-main">
                    {service.children.map((child) => (
                        <ServiceCard key={child.id} service={child} />
                    ))}
                </div>
                
            )}
            
            
        </div>
    );
}

export default ServiceHierarchyPage;
