namespace SpriteKind {
    export const golem1 = SpriteKind.create()
    export const golem2 = SpriteKind.create()
    export const boss1 = SpriteKind.create()
    export const shadow = SpriteKind.create()
    export const boom = SpriteKind.create()
    export const mark = SpriteKind.create()
    export const bossblast = SpriteKind.create()
    export const foe = SpriteKind.create()
    export const range = SpriteKind.create()
    export const q1 = SpriteKind.create()
    export const weaponprojct = SpriteKind.create()
    export const grs = SpriteKind.create()
    export const foe2 = SpriteKind.create()
    export const item = SpriteKind.create()
    export const item2 = SpriteKind.create()
    export const item3 = SpriteKind.create()
    export const armark = SpriteKind.create()
    export const item4 = SpriteKind.create()
    export const foe3 = SpriteKind.create()
    export const range2 = SpriteKind.create()
    export const prop = SpriteKind.create()
    export const crabboss = SpriteKind.create()
    export const phaser = SpriteKind.create()
    export const dashmark = SpriteKind.create()
    export const duelist = SpriteKind.create()
    export const cut = SpriteKind.create()
    export const lesserdashmark = SpriteKind.create()
    export const crystalslash = SpriteKind.create()
}
namespace StatusBarKind {
    export const minihealth = StatusBarKind.create()
    export const minihealth2 = StatusBarKind.create()
    export const energy2 = StatusBarKind.create()
    export const time = StatusBarKind.create()
    export const playerhealth = StatusBarKind.create()
    export const playerstamina = StatusBarKind.create()
    export const playermagic = StatusBarKind.create()
    export const bosshealth = StatusBarKind.create()
    export const bossstamina = StatusBarKind.create()
    export const foebar = StatusBarKind.create()
    export const foebar2 = StatusBarKind.create()
    export const foebar3 = StatusBarKind.create()
    export const foebar4 = StatusBarKind.create()
    export const foebar5 = StatusBarKind.create()
    export const foebar6 = StatusBarKind.create()
    export const foebar7 = StatusBarKind.create()
    export const foebar8 = StatusBarKind.create()
    export const charge = StatusBarKind.create()
    export const potions = StatusBarKind.create()
    export const exp = StatusBarKind.create()
    export const weapon = StatusBarKind.create()
    export const skill = StatusBarKind.create()
    export const crabhealth = StatusBarKind.create()
    export const foebar9 = StatusBarKind.create()
    export const dueliststamina = StatusBarKind.create()
    export const duelisthealth = StatusBarKind.create()
}
let selected = 0
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    wincondition = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    if (battle1 == 1) {
        mySprite.y += -10
    } else if (wincondition == 1) {
    	
    } else {
        if (key == 0) {
            mySprite.y += -35
            game.splash("sunspear sentinel")
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
            music.stopAllSounds()
            music.play(music.createSong(assets.song`bosssong`), music.PlaybackMode.LoopingInBackground)
            battle1 = 1
            minihealth22 = statusbars.create(80, 4, StatusBarKind.minihealth2)
            minihealth22.positionDirection(CollisionDirection.Bottom)
            minihealth22.setOffsetPadding(0, 0)
            minihealth22.max = 250
            minihealth22.value = 250
            minihealth22.setColor(2, 15, 1)
            minihealth22.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            golem22.setImage(assets.image`myImage80`)
            attack_phase = 1
            golem22.setVelocity(150, 0)
        } else if (key == 1) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile80`, function (sprite, location) {
    elitefoe.follow(mySprite, 40)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile79`, function (sprite, location) {
    foe22.follow(mySprite, 40)
    rangedfoe.follow(mySprite, 10)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`upwalk`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.weaponprojct, SpriteKind.boss1, function (sprite, otherSprite) {
    bossbar.value += damage / 3 + (combodamage - resonance * 2)
    pause(200)
})
scene.onOverlapTile(SpriteKind.golem2, assets.tile`myTile15`, function (sprite, location) {
    if (attack_phase == 1) {
        tiles.placeOnRandomTile(golem22, assets.tile`myTile16`)
        golem22.setVelocity(0, 0)
        stamina = statusbars.create(20, 4, StatusBarKind.Energy)
        stamina.attachToSprite(golem22)
        stamina.value = 0
        recharging = 1
        attack_phase = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (wincondition == 1) {
    	
    } else if (bosskey == 1) {
        altattackphase = 1
        wincondition = 0
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        game.splash("Grand Quetzalcoatl")
        mySprite.y += -37
        duelest_hp = statusbars.create(100, 6, StatusBarKind.duelisthealth)
        duelest_hp.setColor(2, 15, 1)
        duelest_hp.positionDirection(CollisionDirection.Bottom)
        duelest_hp.max = 300
        duelest_hp.value = 300
        duelest_hp.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        bossblast2 = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        bossblast2.setKind(SpriteKind.bossblast)
    } else if (bosskey == 0) {
        mySprite.y += 10
        mySprite.sayText("I need a special key", 1000, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile83`, function (sprite, location) {
    elitefoe2.follow(mySprite, 65)
})
statusbars.onZero(StatusBarKind.foebar9, function (status) {
    sprites.destroy(elitefoe2, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.duelist, assets.tile`myTile108`, function (sprite, location) {
    if (attackphase2 == 4) {
        attackphase2 = 5
        dueliststamina.value = 99
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (exousted == 0) {
        music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.UntilDone)
        playercombo = 1
        statusbar2.value += -25
        if (controller.up.isPressed()) {
            controller.moveSprite(mySprite, 200 + dexterity * 200, 150 + dexterity * 5)
            mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            for (let index = 0; index < 10; index++) {
                mySprite.startEffect(effects.warmRadial)
            }
        } else if (controller.right.isPressed()) {
            controller.moveSprite(mySprite, 200 + dexterity * 5, 200 + dexterity * 5)
            mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            for (let index = 0; index < 10; index++) {
                mySprite.startEffect(effects.warmRadial)
            }
        } else if (controller.down.isPressed()) {
            controller.moveSprite(mySprite, 200 + dexterity * 5, 200 + dexterity * 5)
            mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            for (let index = 0; index < 10; index++) {
                mySprite.startEffect(effects.warmRadial)
            }
        } else if (controller.left.isPressed()) {
            controller.moveSprite(mySprite, 200 + dexterity * 5, 200 + dexterity * 5)
            mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            for (let index = 0; index < 10; index++) {
                mySprite.startEffect(effects.warmRadial)
            }
        } else {
        	
        }
        pause(180 + dexterity * 3)
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
        effects.clearParticles(mySprite)
        pause(500)
    }
})
sprites.onOverlap(SpriteKind.foe2, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(foe42)) {
        if (direction == 3) {
            foe42.setVelocity(-250, -250)
            pause(100)
            foe42.setVelocity(0, 0)
            pause(500)
            projectile10 = sprites.createProjectileFromSprite(assets.image`flap2`, foe42, 50, 50)
            pause(200)
        } else if (direction == 4) {
            foe42.setVelocity(250, -250)
            pause(100)
            foe42.setVelocity(0, 0)
            pause(500)
            projectile10 = sprites.createProjectileFromSprite(assets.image`flap1`, foe42, -50, 50)
            pause(200)
        }
    } else if (mySprite.overlapsWith(foe5)) {
        if (direction == 3) {
            foe5.setVelocity(-250, -250)
            pause(100)
            foe5.setVelocity(0, 0)
            pause(500)
            projectile10 = sprites.createProjectileFromSprite(assets.image`flap`, foe5, 50, 50)
            pause(200)
        } else if (direction == 4) {
            foe5.setVelocity(250, -250)
            pause(100)
            foe5.setVelocity(0, 0)
            pause(500)
            projectile10 = sprites.createProjectileFromSprite(assets.image`flap1`, foe5, -50, 50)
            pause(200)
        }
    } else if (mySprite.overlapsWith(foe6)) {
        if (direction == 3) {
            foe6.setVelocity(-250, -250)
            pause(100)
            foe6.setVelocity(0, 0)
            pause(500)
            projectile10 = sprites.createProjectileFromSprite(assets.image`flap`, foe6, 50, 50)
            pause(200)
        } else if (direction == 4) {
            foe6.setVelocity(250, -250)
            pause(100)
            foe6.setVelocity(0, 0)
            pause(500)
            projectile10 = sprites.createProjectileFromSprite(assets.image`flap1`, foe6, -50, 50)
            pause(200)
        }
    }
})
statusbars.onZero(StatusBarKind.bosshealth, function (status) {
    for (let index = 0; index < 8; index++) {
        boss12.startEffect(effects.blizzard, 1000)
    }
    sprites.destroy(boss12, effects.blizzard, 2000)
    game.splash("great foe vanquished")
    battleend = 1
    wincondition = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.bossblast)
    tiles.setCurrentTilemap(tilemap`level0`)
    bossslain = 1
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.golem2, assets.tile`myTile11`, function (sprite, location) {
    if (attack_phase == 1) {
        side = 2
        golem22.setImage(assets.image`myImage79`)
        tiles.placeOnRandomTile(golem22, assets.tile`myTile12`)
        golem22.setVelocity(0, 150)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    statusbar.value += -0.5
    mySprite.startEffect(effects.fire, 100)
})
scene.onOverlapTile(SpriteKind.duelist, assets.tile`myTile113`, function (sprite, location) {
    if (attackphase2 == 3) {
        attackphase2 = 4
        dueliststamina.value = 99
    }
})
statusbars.onZero(StatusBarKind.crabhealth, function (status) {
    for (let index = 0; index < 8; index++) {
        crab.startEffect(effects.blizzard, 1000)
    }
    sprites.destroy(crab, effects.blizzard, 2000)
    game.splash("foe vanquished")
    wincondition = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.range2, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(range4)) {
        animation.runImageAnimation(
        rangedfoe,
        assets.animation`myAnim0`,
        200,
        false
        )
        rangedfoe.follow(mySprite, 0)
        armark2 = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        armark2.setKind(SpriteKind.armark)
        armark2.follow(mySprite, 60)
        pause(200)
        armark2.follow(mySprite, 0)
        for (let index = 0; index < 100; index++) {
            projectile11 = sprites.createProjectileFromSprite(assets.image`laser21`, rangedfoe, 0, 0)
            projectile11.follow(armark2, 100)
            pause(10)
        }
        armark2.setImage(assets.image`test`)
        pause(500)
        rangedfoe.setImage(assets.image`myImage88`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        rangedfoe.follow(mySprite, 10)
        pause(5000)
        sprites.destroyAllSpritesOfKind(SpriteKind.armark)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile71`, function (sprite, location) {
    foe4.follow(mySprite, 40)
})
statusbars.onZero(StatusBarKind.minihealth2, function (status) {
    l = sprites.create(assets.image`myImage43`, SpriteKind.item4)
    tiles.placeOnRandomTile(l, assets.tile`myTile16`)
    wincondition = 1
    attack_phase = 0
    golem22.setVelocity(0, 0)
    completion += 1
    foundsunspear = 1
    collectedweapons += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (key == 0) {
        if (Math.percentChance(18)) {
            game.showLongText("lash of the devourer damage: 25, speed: slow, triple hit", DialogLayout.Center)
            item32 = sprites.create(assets.image`myImage47`, SpriteKind.item3)
            tiles.placeOnRandomTile(item32, assets.tile`myTile13`)
            tiles.setTileAt(item32.tilemapLocation(), assets.tile`myTile0`)
            item32.setScale(0.5, ScaleAnchor.Middle)
        } else if (Math.percentChance(34)) {
            game.showLongText("serpent blade damage: 17, speed: fast, lifesteal 2 per hit", DialogLayout.Center)
            item22 = sprites.create(assets.image`myImage44`, SpriteKind.item2)
            tiles.placeOnRandomTile(item22, assets.tile`myTile13`)
            tiles.setTileAt(item22.tilemapLocation(), assets.tile`myTile0`)
            item22.setScale(0.5, ScaleAnchor.Middle)
        } else {
            game.showLongText("overgrown spear  damage: 22    speed: normal    dash forward while standing to do massive damage", DialogLayout.Center)
            item1 = sprites.create(assets.image`myImage45`, SpriteKind.item)
            tiles.placeOnRandomTile(item1, assets.tile`myTile13`)
            tiles.setTileAt(item1.tilemapLocation(), assets.tile`myTile0`)
            item1.setScale(0.5, ScaleAnchor.Middle)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (exousted == 0) {
        attack = 1
        playercombo += 1
        charge2 = 0
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (reposte == 0) {
            if (playercombo == 1) {
                statusbar2.value += -10
                if (direction == 4) {
                    if (weapon == 0) {
                        mySprite.setImage(assets.image`myImage11`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage61`)
                    } else if (weapon == 1) {
                        statusbar3.value += -12
                        mySprite.setImage(assets.image`myImage39`)
                        projectile9 = sprites.createProjectileFromSprite(assets.image`boltt1`, mySprite, 200, 0)
                        projectile9.setKind(SpriteKind.weaponprojct)
                        pause(200)
                        mySprite.setImage(assets.image`myImage41`)
                        playercombo = 0
                    } else if (weapon == 3) {
                        statusbar2.value += -4
                        mySprite.setImage(assets.image`myImage46`)
                        mySprite.setVelocity(200, 0)
                        pause(200)
                        mySprite.setVelocity(0, 0)
                        mySprite.setImage(assets.image`myImage52`)
                        playercombo = 0
                    } else if (weapon == 4) {
                        statusbar2.value += -7
                        statusbar3.value += -7
                        mySprite.setImage(assets.image`myImage56`)
                        pause(150)
                        mySprite.setImage(assets.image`myImage69`)
                    } else if (weapon == 5) {
                        statusbar2.value += -10
                        mySprite.setImage(assets.image`myImage64`)
                        pause(200)
                        statusbar2.value += -10
                        mySprite.setImage(assets.image`myImage66`)
                        pause(200)
                        statusbar2.value += -10
                        mySprite.setImage(assets.image`myImage68`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage24`)
                        pause(500)
                        playercombo = 0
                    }
                } else if (direction == 3) {
                    if (weapon == 0) {
                        mySprite.setImage(assets.image`myImage10`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage25`)
                    } else if (weapon == 1) {
                        statusbar3.value += -4
                        statusbar2.value += -6
                        mySprite.setImage(assets.image`myImage40`)
                        projectile9 = sprites.createProjectileFromSprite(assets.image`boltt0`, mySprite, -200, 0)
                        projectile9.setKind(SpriteKind.weaponprojct)
                        pause(200)
                        mySprite.setImage(assets.image`myImage42`)
                        playercombo = 0
                    } else if (weapon == 3) {
                        statusbar2.value += -4
                        mySprite.setImage(assets.image`myImage50`)
                        mySprite.setVelocity(-200, 0)
                        pause(200)
                        mySprite.setVelocity(0, 0)
                        mySprite.setImage(assets.image`myImage51`)
                        playercombo = 0
                    } else if (weapon == 4) {
                        statusbar2.value += -7
                        statusbar3.value += -3
                        mySprite.setImage(assets.image`myImage55`)
                        pause(150)
                        mySprite.setImage(assets.image`myImage70`)
                    } else if (weapon == 5) {
                        statusbar2.value += -5
                        mySprite.setImage(assets.image`myImage63`)
                        pause(200)
                        statusbar2.value += -5
                        mySprite.setImage(assets.image`myImage65`)
                        pause(200)
                        statusbar2.value += -5
                        mySprite.setImage(assets.image`myImage67`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage62`)
                        pause(500)
                        playercombo = 0
                    }
                }
            } else if (playercombo == 2) {
                if (weapon == 0) {
                    statusbar2.value += -15
                    if (direction == 4) {
                        mySprite.setImage(assets.image`myImage21`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage2`)
                    } else if (direction == 3) {
                        mySprite.setImage(assets.image`myImage19`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage0`)
                    }
                } else if (weapon == 4) {
                    statusbar2.value += -7
                    statusbar3.value += -7
                    if (direction == 4) {
                        mySprite.setImage(assets.image`myImage57`)
                        pause(150)
                        mySprite.setImage(assets.image`myImage71`)
                    } else if (direction == 3) {
                        mySprite.setImage(assets.image`myImage58`)
                        pause(150)
                        mySprite.setImage(assets.image`myImage72`)
                    }
                }
            } else if (playercombo == 3) {
                if (weapon == 0) {
                    statusbar2.value += -18
                    if (direction == 4) {
                        mySprite.setImage(assets.image`myImage22`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage2`)
                        tired = 0
                    } else if (direction == 3) {
                        mySprite.setImage(assets.image`myImage23`)
                        pause(200)
                        mySprite.setImage(assets.image`myImage0`)
                    }
                } else if (weapon == 4) {
                    statusbar2.value += -7
                    statusbar3.value += -2
                    if (direction == 4) {
                        mySprite.setImage(assets.image`myImage59`)
                        pause(150)
                        mySprite.setImage(assets.image`myImage73`)
                    } else if (direction == 3) {
                        mySprite.setImage(assets.image`myImage60`)
                        pause(150)
                        mySprite.setImage(assets.image`myImage74`)
                    }
                }
            }
            combodamage += -10
            attack = 0
        }
    }
    if (direction == 4) {
        if (weapon == 0) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim13`,
            200,
            true
            )
        } else if (weapon == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim14`,
            200,
            true
            )
        } else if (weapon == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim15`,
            200,
            true
            )
        } else if (weapon == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim12`,
            200,
            true
            )
        } else if (weapon == 5) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim16`,
            200,
            true
            )
        }
    } else if (direction == 3) {
        if (weapon == 0) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim8`,
            200,
            true
            )
        } else if (weapon == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim9`,
            200,
            true
            )
        } else if (weapon == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim10`,
            200,
            true
            )
        } else if (weapon == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim7`,
            200,
            true
            )
        } else if (weapon == 5) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim11`,
            200,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.duelist, SpriteKind.dashmark, function (sprite, otherSprite) {
    if (attackphase2 == 1) {
        sprites.destroy(crystal_mark)
        duelist.follow(crystal_mark, 0)
        effects.clearParticles(duelist)
        dueliststamina = statusbars.create(20, 4, StatusBarKind.dueliststamina)
        dueliststamina.setColor(5, 15)
        dueliststamina.attachToSprite(duelist)
        dueliststamina.value = 0
        attackphase2 = 2
        duelistrcharge = 1
    }
})
sprites.onOverlap(SpriteKind.foe, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(foe4)) {
        foe4.setImage(assets.image`skeleton3`)
        pause(500)
        foe4.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe4)) {
            foe4.setImage(assets.image`skeleton4`)
            pause(200)
            if (mySprite.overlapsWith(foe4)) {
                statusbar.value += -15
            }
        }
        foe4.setImage(assets.image`skeleton0`)
        pause(200)
        foe4.setImage(assets.image`skeleton`)
        foe4.follow(mySprite, 45)
    } else if (mySprite.overlapsWith(foe22)) {
        foe22.setImage(assets.image`skeleton3`)
        pause(500)
        foe22.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe22)) {
            foe22.setImage(assets.image`skeleton4`)
            pause(200)
            if (mySprite.overlapsWith(foe22)) {
                statusbar.value += -15
            }
        }
        foe22.setImage(assets.image`skeleton0`)
        pause(200)
        foe22.setImage(assets.image`skeleton`)
        foe22.follow(mySprite, 50)
    } else if (mySprite.overlapsWith(foe32)) {
        foe32.setImage(assets.image`skeleton3`)
        pause(500)
        foe32.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe32)) {
            foe32.setImage(assets.image`skeleton4`)
            pause(200)
            if (mySprite.overlapsWith(foe32)) {
                statusbar.value += -15
            }
        }
        foe32.setImage(assets.image`skeleton0`)
        pause(200)
        foe32.setImage(assets.image`skeleton`)
        foe32.follow(mySprite, 55)
    } else if (mySprite.overlapsWith(elitefoe)) {
        elitefoe.setImage(assets.image`gudskeleton0`)
        pause(500)
        elitefoe.follow(mySprite, 0)
        if (mySprite.overlapsWith(elitefoe)) {
            elitefoe.setImage(assets.image`gudskeleton2`)
            pause(200)
            if (mySprite.overlapsWith(elitefoe)) {
                statusbar.value += -15
            }
        }
        elitefoe.setImage(assets.image`gudskeleton1`)
        projectile7 = sprites.createProjectileFromSprite(assets.image`myImage18`, elitefoe, -150, 0)
        projectile8 = sprites.createProjectileFromSprite(assets.image`myImage17`, elitefoe, 150, 0)
        projectile7.setScale(0.4, ScaleAnchor.Middle)
        projectile8.setScale(0.4, ScaleAnchor.Middle)
        pause(200)
        foe32.setImage(assets.image`gudskeleton`)
        elitefoe.follow(mySprite, 60)
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    swap += -1
    if (swap == 4) {
        if (foundsunspear == 1) {
            damage = -22
            weapon = 1
            statusbar5.setLabel("sola...")
        } else {
            mySprite.sayText("I haven't found that weapon yet", 2000, false)
        }
    } else if (swap == 3) {
        if (foundlash == 1) {
            weapon = 5
            damage = -25
            statusbar5.setLabel("lash...")
        } else {
            mySprite.sayText("I haven't found that weapon yet", 2000, false)
        }
    } else if (swap == 2) {
        if (foundsepent == 1) {
            damage = -17
            weapon = 4
            statusbar5.setLabel("serp...")
        } else {
            mySprite.sayText("I haven't found that weapon yet", 2000, false)
        }
    } else if (swap == 1) {
        if (foundspear == 1) {
            damage = -22
            weapon = 3
            statusbar5.setLabel("over...")
        } else {
            mySprite.sayText("I haven't found that weapon yet", 2000, false)
        }
    } else if (swap < 0) {
        swap = 4
    } else if (swap == 0) {
        damage = -20
        weapon = 0
        statusbar5.setLabel("old s...")
    }
})
statusbars.onZero(StatusBarKind.foebar, function (status) {
    sprites.destroy(foe4, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    key = 1
    mySprite.sayText("a key, it must unlock something!", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.crabboss, function (sprite, otherSprite) {
    animation.stopAnimation(animation.AnimationTypes.All, crab)
    crab.setImage(assets.image`crab0`)
    pause(500)
    crab.follow(mySprite, 0)
    if (mySprite.overlapsWith(crab)) {
        crab.setImage(assets.image`crab4`)
        pause(200)
        if (mySprite.overlapsWith(crab)) {
            statusbar.value += -15
        }
    }
    crab.setImage(assets.image`crab1`)
    pause(200)
    if (mySprite.overlapsWith(crab)) {
        crab.setImage(assets.image`crab7`)
        pause(200)
        if (mySprite.overlapsWith(crab)) {
            statusbar.value += -20
        }
    }
    crab.setImage(assets.image`crab8`)
    pause(1000)
    if (mySprite.overlapsWith(crab)) {
        crab.setImage(assets.image`crab5`)
        pause(200)
        if (mySprite.overlapsWith(crab)) {
            statusbar.value += -25
        }
    }
    crab.setImage(assets.image`crab3`)
    pause(200)
    animation.runImageAnimation(
    crab,
    assets.animation`myAnim17`,
    200,
    true
    )
    crab.follow(mySprite, 20)
})
sprites.onOverlap(SpriteKind.weaponprojct, SpriteKind.foe3, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(foe4)) {
        h1.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe22)) {
        h2.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe32)) {
        h3.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(elitefoe)) {
        h4.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(rangedfoe)) {
        h5.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe42)) {
        h6.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe5)) {
        h7.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe6)) {
        h7.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedWest, function (sprite, location) {
    if (wincondition == 1) {
    	
    } else if (key == 1) {
        crabbattle = 1
        wincondition = 0
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        game.splash("crystal crab")
        mySprite.x += -20
        bossbar = statusbars.create(100, 6, StatusBarKind.crabhealth)
        bossbar.setColor(2, 15, 1)
        bossbar.positionDirection(CollisionDirection.Bottom)
        bossbar.max = 450
        bossbar.value = 450
        bossbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        crab.follow(mySprite, 20)
        animation.runImageAnimation(
        crab,
        assets.animation`myAnim17`,
        200,
        true
        )
    } else if (key == 0) {
        mySprite.x += 10
        mySprite.sayText("I need a key", 1000, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item3, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        weapon = 5
        damage = -25
        sprites.destroyAllSpritesOfKind(SpriteKind.item3)
        statusbar5.setLabel("lash...")
        foundlash = 1
        collectedweapons += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss1, function (sprite, otherSprite) {
    if (weapon == 4) {
        statusbar.value += 2
    }
    if (attack == 1) {
        bossbar.value += damage + (combodamage - strength * 2)
        pause(200)
    }
})
scene.onOverlapTile(SpriteKind.duelist, assets.tile`myTile118`, function (sprite, location) {
    if (attackphase2 == 6) {
        attackphase2 = 7
        dueliststamina.value = 0
        dueliststamina.setBarSize(20, 4)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weapon == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim8`,
        200,
        true
        )
    } else if (weapon == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim9`,
        200,
        true
        )
    } else if (weapon == 3) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim10`,
        200,
        true
        )
    } else if (weapon == 4) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim7`,
        200,
        true
        )
    } else if (weapon == 5) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim11`,
        200,
        true
        )
    }
    direction = 3
    playercombo = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    mySprite.sayText("a bomb, I might be able to blow something up with this", 2000, false)
    bomb = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.item)
        damage = -22
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    foe6.follow(mySprite, 45)
})
sprites.onOverlap(SpriteKind.weaponprojct, SpriteKind.foe, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(foe4)) {
        h1.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe22)) {
        h2.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe32)) {
        h3.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(elitefoe)) {
        h4.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(rangedfoe)) {
        h5.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe42)) {
        h6.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe5)) {
        h7.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    } else if (mySprite.overlapsWith(foe6)) {
        h8.value += damage / 3 + (combodamage - resonance * 2)
        pause(200)
    }
})
statusbars.onZero(StatusBarKind.playerstamina, function (status) {
    if (exousted == 0) {
        exousted = 1
        controller.moveSprite(mySprite, 0, 0)
        statusbar2.setColor(4, 15)
        statusbar2.value = 200
        statusbar2.max = 200
    } else if (exousted == 1) {
        statusbar2.value = 100
        exousted = 0
        controller.moveSprite(mySprite, 100, 100)
        statusbar2.setColor(7, 15)
    }
})
statusbars.onZero(StatusBarKind.foebar4, function (status) {
    sprites.destroy(elitefoe, effects.disintegrate, 500)
})
statusbars.onStatusReached(StatusBarKind.dueliststamina, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    if (attackphase2 == 2) {
        dueliststamina.setBarSize(0, 1)
        duelist.setImage(assets.image`duel0`)
        pause(500)
        crystal_mark = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        crystal_mark.setKind(SpriteKind.lesserdashmark)
        duelist.follow(crystal_mark, 1000)
    } else if (attackphase2 == 3) {
        dueliststamina.setBarSize(0, 1)
        tiles.placeOnRandomTile(duelist, assets.tile`myTile111`)
        duelist.setImage(assets.image`duel`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
        mySprite.setStayInScreen(true)
        duelist.setStayInScreen(true)
        mySprite3 = sprites.create(assets.image`temp`, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile3`)
        scene.cameraFollowSprite(mySprite3)
        duelist.setImage(assets.image`duel6`)
        pause(500)
        duelist.setVelocity(-200, 200)
    } else if (attackphase2 == 4) {
        tiles.placeOnRandomTile(duelist, assets.tile`myTile110`)
        duelist.setImage(assets.image`duel5`)
        duelist.setVelocity(0, 0)
        pause(500)
        duelist.setVelocity(200, 200)
    } else if (attackphase2 == 5) {
        tiles.placeOnRandomTile(duelist, assets.tile`myTile115`)
        duelist.setImage(assets.image`duel7`)
        duelist.setVelocity(0, 0)
        pause(500)
        duelist.setVelocity(0, -200)
    } else if (attackphase2 == 6) {
        tiles.placeOnRandomTile(duelist, assets.tile`myTile119`)
        duelist.setImage(assets.image`duel8`)
        duelist.setVelocity(0, 0)
        pause(500)
        duelist.setVelocity(200, 0)
    } else if (attackphase2 == 7) {
        scene.cameraFollowSprite(mySprite)
        mySprite.setStayInScreen(false)
        duelist.setStayInScreen(false)
        sprites.destroy(mySprite3)
        tiles.placeOnRandomTile(duelist, assets.tile`myTile114`)
        animation.runImageAnimation(
        duelist,
        assets.animation`myAnim19`,
        200,
        false
        )
        pause(1400)
        mySprite4 = sprites.create(assets.image`wave`, SpriteKind.Projectile)
        mySprite4.changeScale(-0.8, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile114`)
        mySprite4.setVelocity(0, 100)
        animation.runImageAnimation(
        duelist,
        assets.animation`myAnim19`,
        200,
        false
        )
        pause(1400)
        mySprite4 = sprites.create(assets.image`wave`, SpriteKind.Projectile)
        mySprite4.changeScale(-0.7, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile114`)
        mySprite4.setVelocity(0, 100)
        animation.runImageAnimation(
        duelist,
        assets.animation`myAnim19`,
        200,
        false
        )
        pause(1400)
        mySprite4 = sprites.create(assets.image`wave`, SpriteKind.Projectile)
        mySprite4.changeScale(-0.6, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile114`)
        mySprite4.setVelocity(0, 100)
        dueliststamina.value = 0
        dueliststamina.setBarSize(20, 4)
        attackphase2 = 1
    } else if (attackphase2 == 1) {
        sprites.destroy(crystal_mark)
        duelist.follow(crystal_mark, 0)
        effects.clearParticles(duelist)
        dueliststamina.value = 0
        attackphase2 = 2
        crystalcombo = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    foe42.follow(mySprite, 40)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    elitefoe.follow(mySprite, 40)
    foe22.follow(mySprite, 40)
})
statusbars.onStatusReached(StatusBarKind.bossstamina, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    if (altattackphase >= 48) {
        altattackphase = 1
        bossstamina2.max = 200
        bossstamina2.value = 0
        scene.cameraFollowSprite(mySprite)
        mySprite.setFlag(SpriteFlag.StayInScreen, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        bossblast2 = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        bossblast2.setKind(SpriteKind.bossblast)
    } else if (altattackphase >= 14) {
        boss12.follow(mySprite, 0)
        altattackphase += 1
        scene.cameraFollowSprite(boss12)
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        boss12.setFlag(SpriteFlag.StayInScreen, false)
        tiles.placeOnRandomTile(boss12, assets.tile`myTile3`)
        projectile6 = sprites.createProjectileFromSprite(assets.image`bolt`, boss12, 50 * randint(-1, 1), 50 * randint(-1, 1))
        animation.runImageAnimation(
        projectile6,
        assets.animation`booms`,
        200,
        true
        )
        bossstamina2.max = 10
        bossstamina2.value = 0
    } else if (altattackphase >= 9) {
        tiles.placeOnRandomTile(boss12, assets.tile`myTile7`)
        boss12.setImage(img`
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
            `)
        pause(500)
        projectile2 = sprites.createProjectileFromSprite(assets.image`myImage30`, boss12, 80, 0)
        projectile3 = sprites.createProjectileFromSprite(assets.image`myImage34`, boss12, -80, 0)
        projectile4 = sprites.createProjectileFromSprite(assets.image`myImage35`, boss12, 0, -80)
        projectile5 = sprites.createProjectileFromSprite(assets.image`myImage36`, boss12, 0, 80)
        bossstamina2.value = 0
        altattackphase += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile17`)
})
statusbars.onZero(StatusBarKind.foebar2, function (status) {
    sprites.destroy(foe22, effects.disintegrate, 500)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (exousted == 0) {
        controller.moveSprite(mySprite, 90 + dexterity * 5, 90 + dexterity * 5)
        statusbar2.value += -4
        sprinting = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    mySprite.x += 10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    if (bossslain == 1) {
        tiles.setCurrentTilemap(tilemap`level7`)
    } else {
        mySprite.y += -10
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile81`, function (sprite, location) {
    foe32.follow(mySprite, 65)
})
statusbars.onZero(StatusBarKind.playerhealth, function (status) {
    pause(500)
    game.splash("let it be known the most vile serpent, the name of which I shalt not mention, and the foul creatures whom its cause is served by  hath slain thee and as such all the world shall be covered most completely in a complete and total darkness the likes of which cannot be dispelled by any light whatsoever.")
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    game.gameOver(false)
    statusbar.value += 9999
    statusbar2.value += 9999
    statusbar3.value += 9999
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weapon == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim13`,
        200,
        true
        )
    } else if (weapon == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim14`,
        200,
        true
        )
    } else if (weapon == 3) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim15`,
        200,
        true
        )
    } else if (weapon == 4) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim12`,
        200,
        true
        )
    } else if (weapon == 5) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim16`,
        200,
        true
        )
    }
    direction = 4
    playercombo = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    mySprite.y += -10
})
scene.onOverlapTile(SpriteKind.duelist, assets.tile`myTile114`, function (sprite, location) {
    if (attackphase2 == 5) {
        attackphase2 = 6
        dueliststamina.value = 99
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    area = 2
    key = 0
    bosskey = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.foe2)
    sprites.destroyAllSpritesOfKind(SpriteKind.foe)
    sprites.destroyAllSpritesOfKind(SpriteKind.golem2)
    tiles.setCurrentTilemap(tilemap`level11`)
    game.splash("Crystaline Caverns")
    music.play(music.createSong(assets.song`music 1`), music.PlaybackMode.LoopingInBackground)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile105`)
    crab = sprites.create(assets.image`crab`, SpriteKind.crabboss)
    duelist = sprites.create(assets.image`duel`, SpriteKind.duelist)
    prop2 = sprites.create(assets.image`myImage4`, SpriteKind.prop)
    tiles.placeOnRandomTile(crab, assets.tile`myTile1`)
    foe4 = sprites.create(assets.image`myImage83`, SpriteKind.foe3)
    range4 = sprites.create(assets.image`attack`, SpriteKind.range2)
    foe22 = sprites.create(assets.image`myImage83`, SpriteKind.foe3)
    foe32 = sprites.create(assets.image`myImage83`, SpriteKind.foe3)
    rangedfoe = sprites.create(assets.image`myImage88`, SpriteKind.foe3)
    elitefoe = sprites.create(assets.image`myImage93`, SpriteKind.foe3)
    elitefoe2 = sprites.create(assets.image`myImage93`, SpriteKind.foe3)
    range4.setFlag(SpriteFlag.GhostThroughWalls, true)
    range4.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnRandomTile(foe4, assets.tile`myTile72`)
    tiles.placeOnRandomTile(foe22, assets.tile`myTile73`)
    tiles.placeOnRandomTile(elitefoe, assets.tile`myTile74`)
    tiles.placeOnRandomTile(elitefoe2, assets.tile`myTile78`)
    tiles.placeOnRandomTile(range4, assets.tile`myTile75`)
    tiles.placeOnRandomTile(rangedfoe, assets.tile`myTile75`)
    tiles.placeOnRandomTile(foe32, assets.tile`myTile77`)
    tiles.placeOnRandomTile(foe42, assets.tile`myTile77`)
    h1 = statusbars.create(20, 4, StatusBarKind.foebar)
    h2 = statusbars.create(20, 4, StatusBarKind.foebar2)
    h3 = statusbars.create(20, 4, StatusBarKind.foebar3)
    h4 = statusbars.create(40, 4, StatusBarKind.foebar4)
    h5 = statusbars.create(20, 4, StatusBarKind.foebar5)
    h7 = statusbars.create(10, 4, StatusBarKind.foebar7)
    h8 = statusbars.create(10, 4, StatusBarKind.foebar8)
    h9 = statusbars.create(40, 4, StatusBarKind.foebar9)
    h1.attachToSprite(foe4)
    h2.attachToSprite(foe22)
    h3.attachToSprite(foe32)
    h4.attachToSprite(elitefoe)
    h5.attachToSprite(rangedfoe)
    h7.attachToSprite(foe5)
    h8.attachToSprite(foe6)
    h9.attachToSprite(elitefoe2)
    h1.setColor(2, 15, 1)
    h2.setColor(2, 15, 1)
    h3.setColor(2, 15, 1)
    h4.setColor(2, 15, 1)
    h5.setColor(2, 15, 1)
    h7.setColor(2, 15, 1)
    h8.setColor(2, 15, 1)
    h9.setColor(2, 15, 1)
    h4.max = 250
    h4.value = 250
    h9.max = 250
    h9.value = 250
    h1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    h2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    h3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    h4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    h5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    h7.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    h8.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    h9.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    if (bossslain == 1) {
        tiles.setCurrentTilemap(tilemap`level7`)
    } else {
        mySprite.y += -10
    }
})
statusbars.onZero(StatusBarKind.foebar7, function (status) {
    sprites.destroy(foe5, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (bomb > 0) {
        mySprite2 = sprites.create(assets.image`boom`, SpriteKind.boom)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile8`)
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    } else {
        mySprite.x += 10
        mySprite.sayText("blocked by rubble", 1000, false)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`upwalk1`,
    500,
    true
    )
})
statusbars.onZero(StatusBarKind.foebar6, function (status) {
    if (area == 2) {
        let range22: Sprite = null
        let rangedfoe2: Sprite = null
        sprites.destroy(rangedfoe2, effects.disintegrate, 500)
        sprites.destroy(range22, effects.disintegrate, 500)
    } else {
        sprites.destroy(foe42, effects.disintegrate, 500)
    }
})
statusbars.onZero(StatusBarKind.playermagic, function (status) {
    if (magicdrain == 0) {
        magicdrain = 1
        controller.moveSprite(mySprite, 0, 0)
        statusbar3.setColor(4, 15)
        statusbar3.value = 100
    } else if (magicdrain == 1) {
        statusbar3.value = 100
        magicdrain = 0
        controller.moveSprite(mySprite, 50, 50)
        statusbar3.setColor(8, 15)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.duelist, function (sprite, otherSprite) {
    if (attack == 1) {
        duelest_hp.value += damage + (combodamage - strength * 2)
        pause(200)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    bosskey = 1
    mySprite.sayText("a special key, it must unlock something special!", 2000, false)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile84`)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`restore`,
        500,
        false
        )
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("rest", assets.image`rest`),
        miniMenu.createMenuItem("level up", assets.image`level`),
        miniMenu.createMenuItem("exit", assets.image`exit2`)
        )
        controller.moveSprite(mySprite, 0, 0)
        tiles.placeOnTile(myMenu, mySprite.tilemapLocation())
        myMenu.onButtonPressed(controller.A, function (selection) {
            if (selection == "rest") {
                statusbar.value += 9999
                statusbar2.value += 9999
                statusbar3.value += 9999
            } else if (selection == "level up") {
                myMenu.close()
                myMenu2 = miniMenu.createMenu(
                miniMenu.createMenuItem("strength: " + strength, assets.image`str`),
                miniMenu.createMenuItem("dexterity: " + dexterity, assets.image`dex`),
                miniMenu.createMenuItem("vitality: " + vitality, assets.image`vit`),
                miniMenu.createMenuItem("stamina: " + endurance, assets.image`stam0`),
                miniMenu.createMenuItem("mana: " + mana, assets.image`ark`),
                miniMenu.createMenuItem("resonance: " + resonance, assets.image`int`),
                miniMenu.createMenuItem("exit", assets.image`exit2`)
                )
                tiles.placeOnTile(myMenu2, mySprite.tilemapLocation())
                myMenu2.onButtonPressed(controller.A, function (selection) {
                    if (info.score() > 0) {
                        info.changeScoreBy(-1)
                        if (selection == "strength: " + strength) {
                            strength += 1
                            myMenu2.close()
                            controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
                        } else if (selection == "dexterity: " + dexterity) {
                            dexterity += 1
                            myMenu2.close()
                            controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
                        } else if (selection == "vitality: " + vitality) {
                            statusbar.max += 10
                            statusbar.value += 10
                            statusbar.setBarSize(45 + vitality * 3.5, 4)
                            vitality += 1
                            myMenu2.close()
                            controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
                        } else if (selection == "stamina: " + endurance) {
                            statusbar2.max += 10
                            statusbar2.value += 10
                            statusbar2.setBarSize(30 + endurance * 3.5, 4)
                            endurance += 1
                            myMenu2.close()
                            controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
                        } else if (selection == "mana: " + mana) {
                            statusbar3.max += 10
                            statusbar3.value += 10
                            statusbar3.setBarSize(20 + mana * 3.5, 4)
                            mana += 1
                            myMenu2.close()
                            controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
                        } else if (selection == "resonance: " + resonance) {
                            resonance += 1
                            myMenu2.close()
                            animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                            controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
                        }
                    } else if (selection == "exit") {
                        myMenu2.close()
                    }
                })
            } else if (selection == "exit") {
                myMenu.close()
                controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile105`, function (sprite, location) {
    if (wincondition == 1) {
    	
    } else if (bosskey == 1) {
        attackphase2 = 1
        wincondition = 0
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        game.splash("Crystal Duelist")
        mySprite.y += -37
        bossbar = statusbars.create(100, 6, StatusBarKind.bosshealth)
        bossbar.setColor(2, 15, 1)
        bossbar.positionDirection(CollisionDirection.Bottom)
        bossbar.max = 300
        bossbar.value = 300
        bossbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        crystal_mark = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        crystal_mark.setKind(SpriteKind.dashmark)
    } else if (bosskey == 0) {
        mySprite.y += 10
        mySprite.sayText("I need a special key", 1000, false)
    }
})
sprites.onOverlap(SpriteKind.foe3, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(foe4)) {
        foe4.setImage(assets.image`myImage84`)
        pause(500)
        foe4.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe4)) {
            foe4.setImage(assets.image`myImage102`)
            pause(200)
            if (mySprite.overlapsWith(foe4)) {
                statusbar.value += -22
            }
        }
        foe4.setImage(assets.image`myImage85`)
        pause(200)
        foe4.setImage(assets.image`myImage83`)
        foe4.follow(mySprite, 68)
    } else if (mySprite.overlapsWith(foe22)) {
        foe22.setImage(assets.image`myImage84`)
        pause(500)
        foe22.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe22)) {
            foe22.setImage(assets.image`myImage102`)
            pause(200)
            if (mySprite.overlapsWith(foe22)) {
                statusbar.value += -22
            }
        }
        foe22.setImage(assets.image`myImage85`)
        pause(200)
        foe22.setImage(assets.image`myImage83`)
        foe22.follow(mySprite, 64)
    } else if (mySprite.overlapsWith(foe32)) {
        foe32.setImage(assets.image`myImage84`)
        pause(500)
        foe32.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe32)) {
            foe32.setImage(assets.image`myImage102`)
            pause(200)
            if (mySprite.overlapsWith(foe32)) {
                statusbar.value += -22
            }
        }
        foe32.setImage(assets.image`myImage85`)
        pause(200)
        foe32.setImage(assets.image`myImage83`)
        foe32.follow(mySprite, 55)
    } else if (mySprite.overlapsWith(elitefoe)) {
        if (Math.percentChance(70)) {
            elitefoe.setImage(assets.image`myImage91`)
            pause(500)
            elitefoe.follow(mySprite, 0)
            if (mySprite.overlapsWith(elitefoe)) {
                elitefoe.setImage(assets.image`myImage103`)
                pause(200)
                if (mySprite.overlapsWith(elitefoe)) {
                    statusbar.value += -24
                }
            }
            elitefoe.setImage(assets.image`myImage92`)
            pause(200)
            elitefoe.setImage(assets.image`myImage93`)
            elitefoe.follow(mySprite, 60)
        } else {
            elitefoe.setImage(assets.image`myImage94`)
            pause(750)
            elitefoe.follow(mySprite, 0)
            if (mySprite.overlapsWith(elitefoe)) {
                elitefoe.setImage(assets.image`myImage104`)
                pause(200)
                if (mySprite.overlapsWith(foe22)) {
                    statusbar.value += -32
                }
            }
            elitefoe.setImage(assets.image`myImage90`)
            pause(200)
            elitefoe.setImage(assets.image`myImage93`)
            elitefoe.follow(mySprite, 60)
        }
    } else if (mySprite.overlapsWith(elitefoe2)) {
        if (Math.percentChance(70)) {
            elitefoe2.setImage(assets.image`myImage91`)
            pause(500)
            elitefoe2.follow(mySprite, 0)
            if (mySprite.overlapsWith(elitefoe2)) {
                elitefoe2.setImage(assets.image`myImage103`)
                pause(200)
            }
            elitefoe2.setImage(assets.image`myImage92`)
            pause(200)
            elitefoe2.setImage(assets.image`myImage93`)
            elitefoe2.follow(mySprite, 60)
            if (mySprite.overlapsWith(elitefoe2)) {
                statusbar.value += -24
            }
        } else {
            elitefoe2.setImage(assets.image`myImage94`)
            pause(750)
            elitefoe2.follow(mySprite, 0)
            if (mySprite.overlapsWith(elitefoe)) {
                elitefoe2.setImage(assets.image`myImage104`)
                pause(200)
                if (mySprite.overlapsWith(elitefoe2)) {
                    statusbar.value += -32
                }
            }
            elitefoe2.setImage(assets.image`myImage90`)
            pause(100)
            elitefoe2.setImage(assets.image`myImage93`)
            elitefoe2.follow(mySprite, 60)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 50 + dexterity * 5, 50 + dexterity * 5)
    sprinting = 0
})
sprites.onOverlap(SpriteKind.bossblast, SpriteKind.Player, function (sprite, otherSprite) {
    if (altattackphase < 9) {
        if (altattackphase >= 1) {
            altattackphase += 1
            pause(300)
            bossblast2.setImage(assets.image`bolt`)
            if (bossblast2.overlapsWith(mySprite)) {
                if (parry == 1) {
                    statusbar.value += 0
                    reposte = 1
                    mySprite.startEffect(effects.halo)
                } else {
                    statusbar.value += -34
                }
            }
            pause(500)
            sprites.destroy(bossblast2)
            bossblast2 = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
            bossblast2.setKind(SpriteKind.bossblast)
        }
    } else if (altattackphase >= 9) {
        sprites.destroy(bossblast2)
        bossstamina2 = statusbars.create(20, 4, StatusBarKind.bossstamina)
        bossstamina2.value = 0
        bossstamina2.max = 25
        bossstamina2.setColor(5, 15)
        bossstamina2.attachToSprite(boss12)
        recharging2 = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item4, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        weapon = 1
        damage = -20
        sprites.destroyAllSpritesOfKind(SpriteKind.item4)
    }
})
statusbars.onZero(StatusBarKind.foebar3, function (status) {
    sprites.destroy(foe32, effects.disintegrate, 500)
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    if (attack_phase >= 4) {
        attack_phase = 1
        stamina.max = 100
        stamina.value = 0
        scene.cameraFollowSprite(mySprite)
        mySprite.setFlag(SpriteFlag.StayInScreen, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        golem22.setImage(assets.image`myImage81`)
    } else if (attack_phase == 3) {
        golem22.setVelocity(75, 0)
        tiles.placeOnRandomTile(golem22, assets.tile`myTile40`)
    } else if (attack_phase == 2) {
        side = 0
        mark2 = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        mark2.setKind(SpriteKind.mark)
        golem22.follow(mark2)
    } else if (attack_phase == 1) {
        tiles.placeOnRandomTile(golem22, assets.tile`myTile10`)
        golem22.setVelocity(150, 0)
        side = 1
        golem22.setImage(assets.image`myImage80`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.item2)
        damage = -17
        weapon = 4
        statusbar5.setLabel("serp...")
        foundsepent = 1
        collectedweapons += 1
    }
})
sprites.onOverlap(SpriteKind.duelist, SpriteKind.lesserdashmark, function (sprite, otherSprite) {
    duelist.setImage(assets.image`duel`)
    sprites.destroy(crystal_mark)
    effects.clearParticles(duelist)
    crystalcombo += 1
    if (crystalcombo == 1) {
        pause(500)
        duelist.follow(crystal_mark, 0)
        duelist.setImage(assets.image`duel1`)
    } else if (crystalcombo == 2) {
        pause(500)
        duelist.follow(crystal_mark, 0)
        duelist.setImage(assets.image`duel2`)
    } else if (crystalcombo == 3) {
        pause(500)
        duelist.follow(crystal_mark, 0)
        duelist.setImage(assets.image`duel3`)
        pause(1000)
        duelist.setImage(assets.image`duel4`)
        pause(200)
        dueliststamina.value = 0
        dueliststamina.setBarSize(20, 4)
        attackphase2 = 3
        duelistrcharge = 1
    }
    pause(500)
    if (crystalcombo < 3) {
        crystal_mark = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        crystal_mark.setKind(SpriteKind.lesserdashmark)
        duelist.follow(crystal_mark, 1000)
        duelist.setImage(assets.image`teleport`)
    }
    pause(500)
})
statusbars.onZero(StatusBarKind.foebar5, function (status) {
    sprites.destroy(rangedfoe, effects.disintegrate, 500)
    sprites.destroy(range4, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    game.showLongText("the text reads: congratulations if you are reading this then you are a true gamer ", DialogLayout.Full)
})
statusbars.onZero(StatusBarKind.foebar8, function (status) {
    if (area == 2) {
        sprites.destroy(elitefoe2, effects.disintegrate, 500)
    } else {
        sprites.destroy(foe6, effects.disintegrate, 500)
    }
})
sprites.onOverlap(SpriteKind.q1, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dashmark, function (sprite, otherSprite) {
    duelist.follow(crystal_mark, 200)
})
sprites.onOverlap(SpriteKind.range, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(range4)) {
        rangedfoe.setImage(assets.image`skeleton2`)
        rangedfoe.follow(mySprite, 0)
        armark2 = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        armark2.setKind(SpriteKind.armark)
        armark2.follow(mySprite, 50)
        pause(1000)
        if (mySprite.overlapsWith(armark2)) {
            if (parry == 1) {
                statusbar.value += 0
                reposte = 1
                mySprite.startEffect(effects.halo)
            } else {
                statusbar.value += -20
            }
        }
        armark2.follow(mySprite, 0)
        armark2.setImage(assets.image`arrowwww`)
        pause(500)
        sprites.destroy(armark2)
        rangedfoe.setImage(assets.image`skeleton1`)
        rangedfoe.follow(mySprite, 10)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    if (bossslain == 1) {
        tiles.setCurrentTilemap(tilemap`level7`)
    } else {
        mySprite.y += -10
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    foe4.follow(mySprite, 45)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.boom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    foe32.follow(mySprite, 40)
    rangedfoe.follow(mySprite, 10)
    range4.follow(rangedfoe, 100)
    foe5.follow(mySprite, 40)
})
sprites.onOverlap(SpriteKind.golem2, SpriteKind.mark, function (sprite, otherSprite) {
    if (combo <= 3) {
        if (attack_phase == 2) {
            combo += 1
            animation.runImageAnimation(
            golem22,
            assets.animation`myAnim`,
            500,
            false
            )
            mark2.setImage(assets.image`blast`)
            if (mySprite.overlapsWith(mark2)) {
                statusbar.value += -25
            }
            for (let index = 0; index < 4; index++) {
                sprites.destroy(mark2, effects.warmRadial, 200)
            }
            pause(500)
            mark2 = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
            mark2.setKind(SpriteKind.mark)
            golem22.follow(mark2, 150)
        }
    } else if (combo > 3) {
        stamina.setBarSize(20, 4)
        recharging = 1
        attack_phase = 3
        stamina.value = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.golem2, function (sprite, otherSprite) {
    if (weapon == 4) {
        statusbar.value += 2
    }
    if (attack == 1) {
        minihealth22.value += damage + (combodamage - strength * 2)
        pause(200)
    } else if (attack_phase == 1) {
        if (golem22.overlapsWith(mySprite)) {
            statusbar.value += -3
        }
    }
})
let j: Sprite = null
let projectile: Sprite = null
let combo = 0
let mark2: Sprite = null
let recharging2 = 0
let parry = 0
let mana = 0
let endurance = 0
let vitality = 0
let myMenu2: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
let magicdrain = 0
let h9: StatusBarSprite = null
let prop2: Sprite = null
let area = 0
let sprinting = 0
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile6: Sprite = null
let bossstamina2: StatusBarSprite = null
let crystalcombo = 0
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let bomb = 0
let strength = 0
let crabbattle = 0
let projectile8: Sprite = null
let projectile7: Sprite = null
let duelistrcharge = 0
let duelist: Sprite = null
let crystal_mark: Sprite = null
let tired = 0
let projectile9: Sprite = null
let reposte = 0
let charge2 = 0
let attack = 0
let item1: Sprite = null
let item22: Sprite = null
let item32: Sprite = null
let collectedweapons = 0
let completion = 0
let l: Sprite = null
let projectile11: Sprite = null
let armark2: Sprite = null
let crab: Sprite = null
let side = 0
let mySprite2: Sprite = null
let bossslain = 0
let battleend = 0
let projectile10: Sprite = null
let direction = 0
let playercombo = 0
let exousted = 0
let dueliststamina: StatusBarSprite = null
let attackphase2 = 0
let elitefoe2: Sprite = null
let bossblast2: Sprite = null
let duelest_hp: StatusBarSprite = null
let recharging = 0
let stamina: StatusBarSprite = null
let resonance = 0
let combodamage = 0
let bossbar: StatusBarSprite = null
let attack_phase = 0
let minihealth22: StatusBarSprite = null
let battle1 = 0
let wincondition = 0
let h8: StatusBarSprite = null
let h7: StatusBarSprite = null
let h6: StatusBarSprite = null
let h5: StatusBarSprite = null
let h4: StatusBarSprite = null
let h3: StatusBarSprite = null
let h2: StatusBarSprite = null
let h1: StatusBarSprite = null
let elitefoe: Sprite = null
let rangedfoe: Sprite = null
let foe32: Sprite = null
let foe22: Sprite = null
let range4: Sprite = null
let foe4: Sprite = null
let foe6: Sprite = null
let foe5: Sprite = null
let foe42: Sprite = null
let boss12: Sprite = null
let golem22: Sprite = null
let dexterity = 0
let statusbar5: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let damage = 0
let altattackphase = 0
let swap = 0
let weapon = 0
let key = 0
let bosskey = 0
let foundsunspear = 0
let foundspear = 0
let foundlash = 0
let foundsepent = 0
info.setScore(10)
foundsepent = 0
foundlash = 0
foundspear = 0
foundsunspear = 0
bosskey = 0
key = 0
weapon = 0
swap = 0
altattackphase = 2
damage = -20
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
statusbar = statusbars.create(45, 4, StatusBarKind.playerhealth)
statusbar2 = statusbars.create(30, 4, StatusBarKind.playerstamina)
statusbar3 = statusbars.create(20, 4, StatusBarKind.playermagic)
let statusbar4 = statusbars.create(4, 16, StatusBarKind.exp)
statusbar5 = statusbars.create(1, 0, StatusBarKind.weapon)
let statusbar6 = statusbars.create(1, 0, StatusBarKind.skill)
statusbar4.setColor(5, 15, 1)
statusbar.setColor(2, 15, 1)
statusbar2.setColor(7, 15, 1)
statusbar3.setColor(8, 15, 1)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.positionDirection(CollisionDirection.Top)
statusbar2.positionDirection(CollisionDirection.Top)
statusbar3.positionDirection(CollisionDirection.Top)
statusbar4.positionDirection(CollisionDirection.Left)
statusbar5.positionDirection(CollisionDirection.Left)
statusbar6.positionDirection(CollisionDirection.Left)
statusbar6.setLabel("none")
statusbar5.setLabel("old s...")
statusbar.setOffsetPadding(-57, 0)
statusbar2.setOffsetPadding(-65, 5)
statusbar3.setOffsetPadding(-70, 10)
statusbar4.setOffsetPadding(-54, 0)
statusbar5.setOffsetPadding(15, 0)
statusbar4.max = 100
statusbar4.value = 0
controller.moveSprite(mySprite, 50 + dexterity * 1, 50 + dexterity * 1)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
key = 0
golem22 = sprites.create(assets.image`myImage6`, SpriteKind.golem2)
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
golem22,
assets.animation`animation2`,
500,
true
)
tiles.placeOnRandomTile(golem22, assets.tile`myTile2`)
boss12 = sprites.create(assets.image`snake 2`, SpriteKind.boss1)
foe42 = sprites.create(assets.image`snake 2`, SpriteKind.foe2)
foe5 = sprites.create(assets.image`snake 2`, SpriteKind.foe2)
foe6 = sprites.create(assets.image`snake 2`, SpriteKind.foe2)
animation.runImageAnimation(
foe42,
assets.animation`skane`,
500,
true
)
animation.runImageAnimation(
foe5,
assets.animation`skane`,
500,
true
)
animation.runImageAnimation(
foe6,
assets.animation`skane`,
500,
true
)
animation.runImageAnimation(
boss12,
assets.animation`snake2`,
500,
true
)
tiles.placeOnRandomTile(boss12, assets.tile`myTile3`)
foe4 = sprites.create(assets.image`skeleton`, SpriteKind.foe)
range4 = sprites.create(assets.image`attack`, SpriteKind.range)
foe22 = sprites.create(assets.image`skeleton`, SpriteKind.foe)
foe32 = sprites.create(assets.image`skeleton`, SpriteKind.foe)
rangedfoe = sprites.create(assets.image`skeleton1`, SpriteKind.foe)
elitefoe = sprites.create(assets.image`gudskeleton`, SpriteKind.foe)
range4.setFlag(SpriteFlag.GhostThroughWalls, true)
range4.setFlag(SpriteFlag.Invisible, true)
tiles.placeOnRandomTile(foe4, assets.tile`myTile24`)
tiles.placeOnRandomTile(foe22, assets.tile`myTile25`)
tiles.placeOnRandomTile(elitefoe, assets.tile`myTile28`)
tiles.placeOnRandomTile(foe32, assets.tile`myTile27`)
tiles.placeOnRandomTile(rangedfoe, assets.tile`myTile26`)
tiles.placeOnRandomTile(range4, assets.tile`myTile26`)
tiles.placeOnRandomTile(foe42, assets.tile`myTile32`)
tiles.placeOnRandomTile(foe5, assets.tile`myTile31`)
tiles.placeOnRandomTile(foe6, assets.tile`myTile33`)
h1 = statusbars.create(20, 4, StatusBarKind.foebar)
h2 = statusbars.create(20, 4, StatusBarKind.foebar2)
h3 = statusbars.create(20, 4, StatusBarKind.foebar3)
h4 = statusbars.create(20, 4, StatusBarKind.foebar4)
h5 = statusbars.create(20, 4, StatusBarKind.foebar5)
h6 = statusbars.create(20, 4, StatusBarKind.foebar6)
h7 = statusbars.create(20, 4, StatusBarKind.foebar7)
h8 = statusbars.create(20, 4, StatusBarKind.foebar8)
h1.attachToSprite(foe4)
h2.attachToSprite(foe22)
h3.attachToSprite(foe32)
h4.attachToSprite(elitefoe)
h5.attachToSprite(rangedfoe)
h6.attachToSprite(foe42)
h7.attachToSprite(foe5)
h8.attachToSprite(foe6)
h1.setColor(2, 15, 1)
h2.setColor(2, 15, 1)
h3.setColor(2, 15, 1)
h4.setColor(2, 15, 1)
h5.setColor(2, 15, 1)
h6.setColor(2, 15, 1)
h7.setColor(2, 15, 1)
h8.setColor(2, 15, 1)
h4.max = 250
h4.value = 250
h1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h6.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h7.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h8.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
game.onUpdate(function () {
    if (charge2 == 2) {
        charge2 = 1
    }
})
game.onUpdate(function () {
    if (playercombo == 3) {
        playercombo = 0
        combodamage = 0
    }
})
game.onUpdateInterval(0.1, function () {
    if (attack_phase == 3) {
        projectile = sprites.createProjectileFromSprite(assets.image`laser`, golem22, 0, 120)
        golem22.setImage(assets.image`myImage8`)
        sprites.destroy(mark2)
        combo = 0
    }
})
game.onUpdateInterval(0.1, function () {
    if (attack_phase == 1) {
        if (side == 1) {
            golem22.setImage(assets.image`myImage80`)
        } else if (side == 2) {
            golem22.setImage(assets.image`myImage8`)
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (area == 1) {
        for (let index = 0; index < 10; index++) {
            j = sprites.create(assets.image`laser0`, SpriteKind.Projectile)
            tiles.placeOnRandomTile(j, assets.tile`myTile22`)
            j.setVelocity(0, 50)
            j.setFlag(SpriteFlag.DestroyOnWall, true)
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (attack == 0) {
        playercombo = 0
    }
})
game.onUpdateInterval(1000, function () {
    combodamage = 0
})
forever(function () {
    if (magicdrain == 1) {
        statusbar3.value += -1
    }
})
forever(function () {
    if (playercombo > 0) {
        statusbar2.value += 0
    } else if (attack == 1) {
        statusbar2.value += 0
    } else if (exousted == 1) {
        statusbar2.value += -4
    } else {
        statusbar2.value += 2
    }
})
forever(function () {
    if (recharging2 == 1) {
        bossstamina2.value += 1
    }
})
forever(function () {
    if (recharging == 1) {
        stamina.value += 1
    }
})
forever(function () {
    if (completion == 1) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        game.splash("foe slain")
        completion = 0
        battle1 = 0
        minihealth22.setBarSize(1, 1)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        sprites.destroy(golem22, effects.blizzard, 2000)
    }
})
forever(function () {
    if (battleend == 1) {
        bossstamina2.value = 0
    }
})
forever(function () {
    if (magicdrain == 0) {
        statusbar3.value += 0.05
    } else if (magicdrain == 1) {
        statusbar3.value += -1
    }
})
forever(function () {
    if (exousted == 1) {
        statusbar2.value += -1
    }
})
forever(function () {
    if (golem22.isHittingTile(CollisionDirection.Right)) {
        if (attack_phase == 3) {
            stamina.setBarSize(20, 4)
            stamina.value = 0
            recharging = 1
            attack_phase = 4
        }
    }
})
forever(function () {
    if (combo >= 3) {
        stamina.setBarSize(20, 4)
        recharging = 1
    }
})
forever(function () {
    if (attack == 1) {
        if (mySprite.overlapsWith(foe4)) {
            h1.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        } else if (mySprite.overlapsWith(foe22)) {
            h2.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        } else if (mySprite.overlapsWith(foe32)) {
            h3.value += damage + (combodamage - strength * 2)
            pause(200)
        } else if (mySprite.overlapsWith(elitefoe)) {
            h4.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        } else if (mySprite.overlapsWith(rangedfoe)) {
            h5.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        } else if (mySprite.overlapsWith(foe42)) {
            h6.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        } else if (mySprite.overlapsWith(foe5)) {
            h7.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        } else if (mySprite.overlapsWith(foe6)) {
            h8.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        } else if (area == 2) {
            if (mySprite.overlapsWith(elitefoe2)) {
                h9.value += damage + (combodamage - strength * 2)
                if (weapon == 4) {
                    statusbar.value += 2
                }
                pause(200)
            }
        } else if (area == 2) {
        	
        }
    }
})
forever(function () {
    if (attack == 1) {
        if (mySprite.overlapsWith(duelist)) {
            h1.value += damage + (combodamage - strength * 2)
            if (weapon == 4) {
                statusbar.value += 2
            }
            pause(200)
        }
    }
})
forever(function () {
    if (duelistrcharge == 1) {
        dueliststamina.value += 1
    }
})
forever(function () {
    if (crabbattle == 1) {
        if (attack == 1) {
            if (mySprite.overlapsWith(crab)) {
                bossbar.value += damage + (combodamage - strength * 2)
                if (weapon == 4) {
                    statusbar.value += 2
                }
                pause(200)
            }
        }
    }
})
forever(function () {
    if (exousted == 1) {
        controller.moveSprite(mySprite, 0, 0)
    }
})
