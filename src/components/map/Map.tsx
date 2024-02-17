import React, { useState, useEffect, useRef } from 'react'
import type { Point } from '../../stores/mapStore'
import * as Maplibre from 'maplibre-gl'
import { Map as Maptalks, TileLayer, VectorLayer, Marker } from 'maptalks'

interface MapProps {
    points: Point[]
    //id: string
}

export default function Map({ points }: MapProps) {

    const mapContainer = useRef<HTMLDivElement>(null)
    const mapInstance = useRef<Maptalks | null>(null)
    const layer = new VectorLayer('sites')

    useEffect(() => {
        mapInstance.current = new Maptalks(mapContainer.current!, {
            center: [-76.3, 3.23],
            zoom: 14,
            baseLayer: new TileLayer('satellite', {
                urlTemplate: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
              })
          });

          mapInstance.current.addLayer(layer)
    }, [])

    useEffect(() => {
        points.forEach(point => {
            const marker = new Marker(point.geom).addTo(layer)
            
        })
        mapInstance.current?.fitExtent(layer.getExtent(), 0)
        
 
    }, [points, mapInstance])

 
    return (
        <div ref={mapContainer} className="w-[100vw] h-[100vh] fixed">
        </div>
    )
}