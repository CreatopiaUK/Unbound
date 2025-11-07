priority: 0
// This script is designed to fix the issue with Creosote Oil in Immersive Engineering, Thermal Foundation, and TFMG by ensuring that all references to creosote are unified under the forge tag system.
ServerEvents.tags('item.tags', event => {
    event.add('forge:creosote_bucket', 'immersiveengineering:creosote_bucket')
    event.add('forge:creosote_bucket', 'tfmg:creosote_bucket')
    event.add('forge:creosote_bucket', 'thermal:creosote_bucket')
    event.add('forge:treated_wood', 'immersiveengineering:treated_wood_horizontal')
    event.add('forge:treated_wood', 'tfmg:hardened_planks')
})
ServerEvents.tags('tags.fluids', event => {
    event.add('forge:creosote', 'immersiveengineering:creosote')
    event.add('forge:creosote', 'tfmg:creosote')
    event.add('forge:creosote', 'thermal:creosote')
})
ServerEvents.recipes(event => {
  event.recipes.immersiveengineering.blast_furnace('tfmg:silicon_ingot', 'minecraft:quartz', 'immersiveengineering:slag', 1200)
  event.recipes.immersiveengineering.blast_furnace_fuel('tfmg:coal_coke', 1200)
    event.replaceInput({},'thermal:creosote','forge:creosote')
      event.replaceOutput({},'thermal:creosote','forge:creosote')
    event.replaceInput({},'immersiveengineering:creosote','forge:creosote')
      event.replaceOutput({},'immersiveengineering:creosote','forge:creosote')
    event.replaceInput({},'tfmg:creosote','forge:creosote')
      event.replaceOutput({},'tfmg:creosote','forge:creosote')
    event.replaceInput({}, 'tfmg:hardened_planks', '#forge:treated_wood')
      event.replaceOutput({}, 'tfmg:hardened_planks', '#forge:treated_wood')
    event.stonecutting('tfmg:hardened_planks', 'immersiveengineering:treated_wood_horizontal')
})
console.log('The factory must grow just grew a little bigger! (Immeersive Engineering Creosote Oil fix)')