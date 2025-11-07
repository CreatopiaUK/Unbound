ServerEvents.recipes(event => {
  event.remove({ id: 'evolvedmekanism:alloying/compat/enderio/nethercotta' })
  event.remove({ id: 'evolvedmekanism:alloying/compat/enderio/red_dye' })
  event.remove({ output: 'mekanism:upgrade_gas' })

  let inter = 'kubejs:upgrade_incomplete'
  event.recipes.create.sequenced_assembly([ Item.of('mekanism:upgrade_gas').withChance(100.0)],
  'tfmg:cast_iron_ingot',
  [
    event.recipes.createDeploying(inter, [inter, '#forge:dusts/iron']),
    event.recipes.createDeploying(inter, [inter, 'mekanism:alloy_reinforced']),
    event.recipes.createPressing(inter, inter)
  ]).transitionalItem(inter).loops(1)

  event.remove({ output: 'mekanism:upgrade_muffling' })
  event.recipes.create.sequenced_assembly([ Item.of('mekanism:upgrade_muffling').withChance(100.0)],
  'tfmg:cast_iron_ingot',
  [
    event.recipes.createDeploying(inter, [inter, '#forge:dusts/steel']),
    event.recipes.createDeploying(inter, [inter, 'mekanism:alloy_reinforced']),
    event.recipes.createPressing(inter, inter)
  ]).transitionalItem(inter).loops(1)

  event.remove({ output: 'mekanism:upgrade_filter' })
  event.recipes.create.sequenced_assembly([ Item.of('mekanism:upgrade_filter').withChance(100.0)],
  'tfmg:cast_iron_ingot',
  [
    event.recipes.createDeploying(inter, [inter, '#forge:dusts/tin']),
    event.recipes.createDeploying(inter, [inter, 'mekanism:alloy_reinforced']),
    event.recipes.createPressing(inter, inter)
  ]).transitionalItem(inter).loops(1)

  event.remove({ id: 'tfmg:sequenced_assembly/steel_mechanism' })

  event.recipes.create.sequenced_assembly([ Item.of('tfmg:steel_mechanism').withChance(94.0),
    Item.of('thermal:steel_plate').withChance(1.0),
    Item.of('tfmg:steel_cogwheel').withChance(1.0),
    Item.of('tfmg:large_steel_cogwheel').withChance(1.0),
    Item.of('tfmg:screw').withChance(1.0),
    Item.of('thermal:nickel_plate').withChance(1.0),
    Item.of('thermal:lead_plate').withChance(1.0)
  ],
  '#forge:plates/steel',
  [
    event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
    event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', '#forge:plates/nickel']),
    event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
    event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', '#forge:plates/lead']),
    event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
    event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver'])
  ]).transitionalItem(inter).loops(2)
})
