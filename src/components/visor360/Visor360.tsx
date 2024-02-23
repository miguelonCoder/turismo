import React, { useRef, useEffect } from 'react'
import { OrbitControls } from '../../stores/OrbitControls'
import { RGBELoader } from '../../stores/RGBELoader'
import * as THREE from 'three'
import type { Point } from '../../stores/mapStore'

export default function Visor({ point }: { point: Point }) {

  const sceneContainer = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let scene: THREE.Scene
    let renderer: THREE.WebGLRenderer

    scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100)
    camera.position.z = 500

    renderer = new THREE.WebGLRenderer({
      canvas: sceneContainer.current!
    })

    new RGBELoader()
      .load('../../../images/360/360.hdr', (texture: any) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene.background = texture
        scene.environment = texture
      })

    const texture = new THREE.TextureLoader().load('https://l13.alamy.com/360es/pn3rnd/el-charco-de-la-registradora-chorro-de-plata-pn3rnd.jpg')
    texture.mapping = THREE.EquirectangularReflectionMapping
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearMipMapLinearFilter;

    const material = new THREE.MeshBasicMaterial({ map: texture })
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(500, 64, 64), material)
    scene.add(sphere)

    const controls = new OrbitControls(camera, sceneContainer.current)
    controls.rotateSpeed = -0.5

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  const createScene = () => {

  }

  return (
    <div className=' fixed top-0 left-0 right-0 bottom-0' >
      <canvas className='h-full w-full' ref={sceneContainer} />
    </div>
  )
}