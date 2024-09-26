"use client";
import Section from "@/components/common/section";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import MapSheet from "@/components/MapSheet";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useTheme } from "next-themes";
import { usePosts } from "@/lib/hooks/usePosts";

export default function Home() {
    const searchParams = useSearchParams();
    const { theme } = useTheme();
    const mapContainer = useRef<any>(null);
    const map = useRef<mapboxgl.Map | any>(null);
    const mapId = searchParams.get("id");

    const TOKEN =
        "pk.eyJ1IjoiYXprcml2ZW4xNiIsImEiOiJjbGhma3IxaWcxN3c3M2VyM3VhcGsxcHk3In0.pto_0eshW9NHMP-m1O_blg";

    const { data, isPending, isFetching } = usePosts(100);

    useEffect(() => {
        mapboxgl.accessToken = TOKEN;

        // Determine the initial map style based on theme and mapId
        const initialMapStyle = mapId
            ? `mapbox://styles/mapbox/${mapId}`
            : theme === "dark"
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/light-v11";

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: initialMapStyle,
            center: [123.14389088712784, 11.461424460015792],
            zoom: 13,
            scrollZoom: false,
        });

        // Add controls
        map.current.addControl(new mapboxgl.FullscreenControl(), "top-left");
        map.current.addControl(new mapboxgl.NavigationControl(), "top-left");
        map.current.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                // @ts-ignore
                mapboxgl,
            })
        );
        map.current.addControl(new mapboxgl.GeolocateControl());

        return () => {
            map.current.remove();
        };
    }, [TOKEN, mapId, theme]);

    useEffect(() => {
        if (!data || isPending || isFetching) return;

        data.forEach((post) => {
            const { latitude, longitude, title } = post;
            const marker = new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(map.current);

            marker.getElement().addEventListener("click", () => {
                alert(`Marker clicked: ${title}`);
            });
        });
    }, [data, isPending, isFetching, theme]);

    useEffect(() => {
        if (map.current) {
            const newMapStyle = mapId
                ? `mapbox://styles/mapbox/${mapId}`
                : theme === "dark"
                ? "mapbox://styles/mapbox/dark-v11"
                : "mapbox://styles/mapbox/light-v11";
            map.current.setStyle(newMapStyle);
        }
    }, [theme, mapId]);

    return (
        <Section>
            <MapSheet />
            <div className="h-screen w-full" ref={mapContainer} />
        </Section>
    );
}
