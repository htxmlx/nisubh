"use client";
import Section from "@/components/common/section";
import { stores } from "@/lib/dummydata";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import MapSheet from "@/components/MapSheet";

export default function Home() {
    const searchParams = useSearchParams();
    const mapContainer = useRef<any>(null);
    const map = useRef<mapboxgl.Map | any>(null);
    const mapStyle = searchParams.get("map_styles");
    console.log(mapStyle);

    const TOKEN =
        "pk.eyJ1IjoiYXprcml2ZW4xNiIsImEiOiJjbGhma3IxaWcxN3c3M2VyM3VhcGsxcHk3In0.pto_0eshW9NHMP-m1O_blg";

    useEffect(() => {
        mapboxgl.accessToken = TOKEN;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyle || "mapbox://styles/mapbox/streets-v12",
            center: [-77.034084, 38.909671],
            zoom: 13,
            scrollZoom: false,
        });

        map.current.on("load", () => {
            /* Add the data to your map as a layer */
            map.current.addLayer({
                id: "locations",
                type: "circle",
                /* Add a GeoJSON source containing place coordinates and information. */
                source: {
                    type: "geojson",
                    data: stores,
                },
            });
        });
    }, []);

    return (
        <Section>
            <MapSheet />
            <div className="h-screen w-full" ref={mapContainer} />
        </Section>
    );
}
