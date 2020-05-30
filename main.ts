namespace SpriteKind {
    export const inOrbit = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. 5 . . . . . . . . . . . . 5 . 
. . . . . . . . 1 . 5 . . . . . 
. . . . 5 . . . . . . . 1 . . . 
. . . 1 . . . . . 1 . . . . 1 . 
. . . . . . . . . . . . . . . . 
. . . . . 5 . . . . . 1 . 5 . . 
. . 1 . . . . . . 1 . . . . . . 
. . . 5 . . . 1 . . . . . . . 5 
5 . . . . . . . . . . 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 . . . . . . 1 . . 
. . 1 . . . . 1 . . 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . 5 . . . . . . . . . . . . 
. . . . . . . . . 1 . . . . . 5 
. . . . . 1 . . . . . . . . . . 
`
}
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1],
            TileScale.Sixteen
        ))
let Sun = sprites.create(img`
. . . . . 2 2 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 . . 
. 2 2 2 4 4 4 4 4 4 4 4 4 4 4 2 2 2 . 
. 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 . 
2 2 4 4 4 4 4 4 5 5 5 4 4 4 4 4 4 2 2 
2 2 4 4 4 4 5 5 5 5 5 5 5 4 4 4 4 2 2 
2 2 4 4 4 5 5 5 5 5 5 5 5 4 4 4 4 2 2 
2 2 4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 2 2 
2 2 4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 2 2 
2 2 4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 2 2 
2 2 4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 2 2 
2 2 4 4 4 4 5 5 5 5 5 5 5 4 4 4 4 2 2 
2 2 4 4 4 4 4 4 5 5 5 4 4 4 4 4 4 2 2 
. 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 . 
. 2 2 2 4 4 4 4 4 4 4 4 4 4 4 2 2 2 . 
. . 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . 2 2 2 2 2 2 2 2 2 . . . . . 
`, SpriteKind.Player)
Sun.startEffect(effects.warmRadial, 5000)
controller.moveSprite(Sun, 60, 60)
scene.cameraFollowSprite(Sun)
let mercury = sprites.create(img`
. 1 1 1 1 1 . 
1 d d d d c 1 
1 b d d b d 1 
1 d c d d d 1 
1 d b d c d 1 
1 d d d d b 1 
. 1 1 1 1 1 . 
`, SpriteKind.inOrbit)
let orbitDistance = 14
let current_angle = 0
let venus = sprites.create(img`
. . . 5 5 5 5 5 5 5 . . . 
. . 5 4 4 4 4 4 5 5 4 . . 
. 5 5 5 4 4 4 5 5 5 5 4 . 
5 5 5 2 2 2 5 5 5 5 5 5 4 
5 5 5 2 5 5 5 5 5 5 5 5 4 
5 4 4 2 5 5 5 5 5 5 5 5 4 
5 4 4 2 2 2 2 2 2 5 5 5 4 
5 4 4 5 5 5 5 2 2 5 5 5 4 
5 4 4 5 5 5 5 2 2 2 4 5 4 
5 4 4 5 5 5 5 2 2 2 4 4 4 
. 5 4 4 4 5 5 4 4 4 4 4 . 
. . 5 4 4 5 5 4 4 4 4 . . 
. . . 5 5 5 5 5 5 5 . . . 
`, SpriteKind.inOrbit)
let OrbitDistance1 = 20
let CurrentAngle1 = 10
let earth = sprites.create(img`
. . . 9 9 9 9 9 9 9 . . . 
. . 9 6 6 6 6 6 7 7 9 . . 
. 9 7 7 6 6 6 7 7 7 7 9 . 
9 7 7 8 8 8 7 7 7 7 7 7 9 
9 7 7 8 7 7 7 7 7 7 7 7 9 
9 6 6 8 7 7 7 7 7 7 7 7 9 
9 6 6 8 8 8 8 8 8 7 7 7 9 
9 6 6 7 7 7 7 8 8 7 7 7 9 
9 6 6 7 7 7 7 8 8 8 6 7 9 
9 6 6 7 7 7 7 8 8 8 6 6 9 
. 9 6 6 6 7 7 6 6 6 6 9 . 
. . 9 6 6 7 7 6 6 6 9 . . 
. . . 9 9 9 9 9 9 9 . . . 
`, SpriteKind.inOrbit)
let ORBITdistance2 = 30
let currentAngle2 = 20
let Mars = sprites.create(img`
. 4 4 4 4 4 . 
4 2 2 2 2 4 4 
4 5 2 2 5 2 4 
4 2 4 2 2 2 4 
4 2 5 2 4 2 4 
4 2 2 2 2 5 4 
. 4 4 4 4 4 . 
`, SpriteKind.inOrbit)
let orbitDistance3 = 46
let currentAngle3 = 30
let Jupiter = sprites.create(img`
. . . . . e e e e e e e e e . . . . . 
. . . e e c c c c c c c c c e e . . . 
. . e c c c c c c c c c c c c c e . . 
. e e e e e e e e e e e e e e e e e . 
. e e e e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e e e e e 
e c c c c c c c c c c c c c c c c c e 
e c c c c c c c c c c c c c c c c c e 
e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e 
e c c c c c c c c c c c c c c c c c e 
e c c c c c c c c c c c c c c c c c e 
e e e e e e e e e e e e e e e e e e e 
. e e e e e e e e e e e e e e e e e . 
. e e e e e e e e e e e e e e e e e . 
. . e c c c c c c c c c c c c c e . . 
. . . e e c c c c c c c c c e e . . . 
. . . . . e e e e e e e e e . . . . . 
`, SpriteKind.inOrbit)
let orbitDistance4 = 60
let CCurrentAngle4 = 40
let saturn = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 . . . . . . . . . . b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . 5 . . . 5 . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . 5 . . . . 5 5 . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 . . . . 5 5 . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . 5 5 . . . . . 5 b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . . 5 5 . . . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 5 5 5 b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . b 5 5 5 b b b b b b b b b b b b b b b 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . b b b b 5 5 5 5 b b b b b b b b b b b . 5 5 5 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . b b b b b b b b 5 5 5 5 b b b b b b b . . . 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . b b b b b b b b b b b 5 5 5 b b b . . . . . . 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b 5 5 5 5 . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b . . 5 5 5 5 5 . . 5 . . . . . . . 
. . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . 5 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.inOrbit)
orbitDistance4 = 80
let current_Angle5 = 50
let uranus = sprites.create(img`
. . . . . 9 9 9 9 9 9 9 9 9 . . . . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . 9 9 9 9 9 9 6 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 6 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 6 9 9 9 . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
. . 9 9 9 9 9 9 6 9 9 9 9 9 9 9 9 . . 
. . . 9 9 9 9 9 9 6 9 9 9 9 9 9 . . . 
. . . . . 9 9 9 9 9 9 9 9 9 . . . . . 
`, SpriteKind.inOrbit)
let OrbitDistance6 = 90
let currentAGE6 = 60
let neptune = sprites.create(img`
. . . . . 8 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 . . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 6 8 8 8 8 8 8 . . . 
. . . . . 8 8 8 8 8 8 8 8 8 . . . . . 
`, SpriteKind.inOrbit)
OrbitDistance6 = 90
let currentAGE7 = 70
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    current_angle += 0.1
    mercury.x = Sun.x + Math.cos(current_angle) * orbitDistance
    mercury.y = Sun.y + Math.sin(current_angle) * orbitDistance
    CurrentAngle1 += 0.1
    venus.x = Sun.x + Math.cos(CurrentAngle1) * OrbitDistance1
    venus.y = Sun.y + Math.sin(CurrentAngle1) * OrbitDistance1
    currentAngle2 += 0.1
    earth.x = Sun.x + Math.cos(currentAngle2) * ORBITdistance2
    earth.y = Sun.y + Math.sin(currentAngle2) * ORBITdistance2
    currentAngle3 += 0.1
    Mars.x = Sun.x + Math.cos(currentAngle3) * orbitDistance3
    Mars.y = Sun.y + Math.sin(currentAngle3) * orbitDistance3
    CCurrentAngle4 += 0.1
    Jupiter.x = Sun.x + Math.cos(CCurrentAngle4) * orbitDistance4
    Jupiter.y = Sun.y + Math.sin(CCurrentAngle4) * orbitDistance4
    current_Angle5 += 0.1
    saturn.x = Sun.x + Math.cos(current_Angle5) * orbitDistance4
    saturn.y = Sun.y + Math.sin(current_Angle5) * orbitDistance4
    currentAGE6 += 0.1
    uranus.x = Sun.x + Math.cos(currentAGE6) * OrbitDistance6
    uranus.y = Sun.y + Math.sin(currentAGE6) * OrbitDistance6
    currentAGE7 += 0.1
    neptune.x = Sun.x + Math.cos(currentAGE7) * OrbitDistance6
    neptune.y = Sun.y + Math.sin(currentAGE7) * OrbitDistance6
})
