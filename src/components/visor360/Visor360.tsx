import React, { useRef, useEffect, useState } from 'react'
import { OrbitControls } from '../../stores/OrbitControls'
import { RGBELoader } from '../../stores/RGBELoader'
import * as THREE from 'three'
import type { Point } from '../../stores/mapStore'

export default function Visor({ point }: { point: Point }) {

  const sceneContainer = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {

    new RGBELoader()
      .load(
        '../../../images/360/' + point.image360, 
        (texture: any) => {
          createScene(texture)
          setLoading(false)
        },
        (progress: ProgressEvent)=> {
          console.log(progress)
        }
      )
  }, [])

  const createScene = (texture: any) => {
    let scene: THREE.Scene
    let renderer: THREE.WebGLRenderer

    scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100)
    camera.position.z = 500

    renderer = new THREE.WebGLRenderer({
      canvas: sceneContainer.current!,
      antialias: true
    })

    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = texture
    scene.environment = texture

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    const controls = new OrbitControls(camera, sceneContainer.current)
    controls.rotateSpeed = -0.5

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()

      renderer.render(scene, camera)
    }

    animate()
  }


  return (
    <div className=' fixed top-0 left-0 right-0 bottom-0' >
    {loading && <span className=' w-full h-full absolute bg-black text-white flex justify-center items-center'>Estamos cargando la escena</span>}
      <canvas className='h-full w-full' ref={sceneContainer} />
    </div>
  )
}
