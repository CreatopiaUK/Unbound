priority: 1000
ServerEvents.tags('item.tags', event => {
  event.removeAll('storagedrawers:gold_keyrings')
  //event.removeAll('storagedrawers:keyrings_personal_priority')
  event.removeAll('hexcasting:dusts/amethyst')
  //event.removeAll('hexcasting:amethyst_dust')
  event.removeAll('c:blood_bottle')
  //event.removeAll('forge:blood_bottle')
  event.removeAll('quark:wraith_spawnable')
  //event.removeAll('quark:soul_stone')
  event.removeAll('forge:is_stony')
  //event.removeall('minecraft:stony_peaks')
  /*event.add('forge:cooked_beef_or_vegan', 'minecraft:cooked_beef')
    event.add('forge:cooked_beef_or_vegan', 'farmersdelight:beef_patty')
    event.add('forge:cooked_beef_or_vegan', 'butcher:tbonesteak')
    event.add('forge:cooked_beef_or_vegan', 'butcher:chuck_steak')
    event.add('forge:cooked_beef_or_vegan', 'butcher:rib_steak')
    event.add('forge:cooked_beef_or_vegan', 'butcher:rump_steak')
    event.add('forge:cooked_beef_or_vegan', 'butcher:sirloin_steak')

    event.add('forge:slimeball/blood', 'evilcraft:condensed_blood')

    event.add('forge:bread_slices', 'minecraft:bread')
    event.add('forge:bread_slices', 'veggiesdelight:cauliflower_bread')
    event.add('forge:tortilla', 'culturaldelights:tortilla')

    event.add('minecraft:mushroom_hyphae', 'minecraft:crimson_hyphae')
    event.add('minecraft:mushroom_hyphae', 'minecraft:warped_hyphae')
    event.add('minecraft:mushroom_hyphae', 'tconstruct:bloodshroom_wood')*/
})

ServerEvents.recipes(event => {
/*    event.remove({ input: 'tfc:tfc_iron_ingot' })
    event.replaceInput({}, '#apotheotic_additions:nature_rune_materials', 'minecraft:poisonous_potato')
    event.replaceInput({}, '#biomeswevegone:palo_verde_planks', 'biomeswevegone:palo_verde_log')*/
    event.remove({ input: '#forge:bread_slices' })
    event.remove({ input: '#forge:tortilla' })

  event.recipes.create.sequenced_assembly([ Item.of('farmersdelight:bacon_sandwich').withChance(100.0)],
  '#forge:bread',[
    event.recipes.createDeploying('farmersdelight:bacon_sandwich', ['farmersdelight:bacon_sandwich', 'farmersdelight:cooked_bacon']),
    event.recipes.createDeploying('farmersdelight:bacon_sandwich', ['farmersdelight:bacon_sandwich', '#forge:salad_ingredients']),
    event.recipes.createDeploying('farmersdelight:bacon_sandwich', ['farmersdelight:bacon_sandwich', 'farmersdelight:tomato'])
  ]).transitionalItem('farmersdelight:bacon_sandwich').loops(1)

  event.recipes.create.sequenced_assembly([ Item.of('farmersdelight:mutton_wrap').withChance(100.0)],
  'culturaldelights:tortilla',[
    event.recipes.createDeploying('farmersdelight:mutton_wrap', ['farmersdelight:mutton_wrap', '#forge:cooked_mutton']),
    event.recipes.createDeploying('farmersdelight:mutton_wrap', ['farmersdelight:mutton_wrap', '#forge:salad_ingredients']),
    event.recipes.createDeploying('farmersdelight:mutton_wrap', ['farmersdelight:mutton_wrap', 'farmersdelight:onion'])
  ]).transitionalItem('farmersdelight:mutton_wrap').loops(1)
})


