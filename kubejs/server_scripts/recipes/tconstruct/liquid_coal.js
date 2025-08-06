ServerEvents.recipes(event => {
    // Melting recipe for coal
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "minecraft:coal"
        },
        "result": {
            "amount": 90,
            "fluid": "ustcreate:liquid_coal"
        },
        "temperature": 600,
        "time": 40
    })

    // Casting recipe for Andesite
    event.custom({
        "type": "tconstruct:casting_basin",
        "cooling_time": 40,
        "fluid": {
            "amount": 810,
            "fluid": "ustcreate:liquid_coal"
        },
        "result": "minecraft:coal_block",
    })

    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": "tconstruct:casts/single_use/ingot"
        },
        "cast_consumed": true,
        "cooling_time": 30,
        "fluid": {
            "amount": 90,
            "fluid": "ustcreate:liquid_coal"
        },
        "result": "minecraft:coal"
    })
})
