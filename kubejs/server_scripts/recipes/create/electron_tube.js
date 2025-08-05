ServerEvents.recipes(event =>{
    //电子管
    event.remove({output:"create:electron_tube"})
    event.recipes.create.filling([
        "create:electron_tube"
    ], [
        Fluid.of("ustcreate:liquid_rose_quartz", 500),
        "createdeco:zinc_sheet"
    ])
    .id("ustcreate:electron_tube_filling")
})