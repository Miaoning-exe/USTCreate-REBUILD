ServerEvents.recipes(event => {
    // 黑沙
    event.recipes.create.crushing([
        "biomesoplenty:black_sand", 
        Item.of("minecraft:flint", 1).withChance(0.25),
        Item.of("minecraft:coal", 1).withChance(0.005)
    ], [
        "minecraft:blackstone"
    ]).id("ustcreate:crushing/black_sand")

    // 黑沙脱粒过筛
    event.custom({
        "type": "ratatouille:threshing",
        "ingredients": [
            {
                "item": "biomesoplenty:black_sand"
            }
        ],
        "processingTime": 200,
        "results": [
            {
                "item": "tconstruct:debris_nugget",
                "count": 1,
                "chance": 0.0001
            },
            {
                "item": "minecraft:coal",
                "count": 1,
                "chance": 0.008
            },
            {
                "item": "ustcreate:sulfur",
                "count": 1,
                "chance": 0.1
            },
            {
                "item": "minecraft:iron_nugget",
                "count": 2,
                "chance": 0.1
            },
        ]
    }).id("ustcreate:threshing/black_sand")

    // 白沙
    event.recipes.create.crushing([
        "biomesoplenty:white_sand", 
        Item.of("minecraft:amethyst_shard", 1).withChance(0.01)
    ], [
        "minecraft:calcite"
    ]).id("ustcreate:crushing/white_sand")

    // 白沙脱粒过筛
    event.custom({
        "type": "ratatouille:threshing",
        "ingredients": [
            {
                "item": "biomesoplenty:white_sand"
            }
        ],
        "processingTime": 200,
        "results": [
            {
                "item": "minecraft:bone_meal",
                "count": 1,
                "chance": 0.02
            },
            {
                "item": "biomesoplenty:sea_oats",
                "count": 1,
                "chance": 0.1
            },
            {
                "item": "biomesoplenty:cattail",
                "count": 1,
                "chance": 0.05
            },
            {
                "item": "fruitsdelight:pineapple_sapling",
                "count": 1,
                "chance": 0.05
            },
            {
                "item": "create:zinc_nugget",
                "count": 1,
                "chance": 0.02
            },
            {
                "item": "minecraft:ink_sac",
                "count": 1,
                "chance": 0.15
            }
        ]
    }).id("ustcreate:threshing/white_sand")
})