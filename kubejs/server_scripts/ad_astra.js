"use strict";

//remover recetas o modificar

ServerEvents.tags('fluid', event => {
    event.add('forge:ad_fluids', 'ad_astra:oil'),
    event.add('forge:ad_fluids', 'ad_astra:fuel'),
    event.add('forge:ad_fluids', 'ad_astra:cryo_fuel'),
	event.add('c:oil', 'createdieselgenerators:crude_oil'),
	event.removeAll('ad_astra:fuel'),
	event.add('ad_astra:fuel', 'oritech:still_fuel')

	
})


ServerEvents.recipes(event => {
	
	event.shaped(
		Item.of('oritech:big_solar_panel_block', 1),
		[
			'ABA',
			'CDC',
			'EFE'
		],
		{
			A: 'ad_astra:photovoltaic_etrium_cell',
			B: 'ae2:charged_certus_quartz_crystal',
			C: 'oritech:advanced_battery',
			D: 'oritech:silicon_wafer',
			E: 'oritech:flux_gate',
			F: 'ad_astra:steel_plate'
		}
	)
	
	event.replaceInput(
		{input:'ad_astra:etrionic_capacitor'},
		'ad_astra:etrionic_capacitor',
		'oritech:advanced_battery'
	)
	event.replaceInput(
		{output:'#oritech:plating'},
		'#c:ingots/steel',
		'ad_astra:steel_plate'
	)
	
	event.remove({output:'oritech:big_solar_panel_block'}),
	event.remove({output:'ad_astra:solar_panel'}),
	event.remove({output:'ad_astra:oil'}),
	event.remove({output:'ad_astra:fuel'}),
	event.remove({output:'ad_astra:cryo_fuel'}),
	event.remove({output:'ad_astra:fuel_refinery'}),
	event.remove({not:{type:'oritech:centrifuge_fluid'}, output:'oritech:still_fuel' }),
	event.remove({output:'ad_astra:compressor'}),
	event.remove({output:'ad_astra:fuel_refinery'}),
	event.remove({output:'ad_astra:water_pump'}),
	event.remove({output:'ad_astra:coal_generator'}),
	event.remove({output:'ad_astra:etrionic_blast_furnace'}),
	event.remove({output:'ad_astra:energizer'}),
	event.remove({output:'ad_astra:cryo_freezer'}),
	event.remove({type:'ad_astra:compressing'}),
	event.remove({output:'ad_astra:steel_cable'}),
	event.remove({output:'ad_astra:desh_cable'}),
	event.remove({output:'ad_astra:desh_fluid_pipe'}),
	event.remove({output:'ad_astra:ostrum_fluid_pipe'}),
	event.remove({output:'ad_astra:etrionic_capacitor'}),
	event.remove({type:'ad_astra:cryo_freezing'}),
	event.remove({output:'ad_astra:cable_duct'}),
	event.remove({output:'ad_astra:fluid_pipe_duct'})

})

//jei/emi remover entradas

//items

RecipeViewerEvents.removeEntriesCompletely('item', event => {
	event.remove('ad_astra:fuel_refinery'),
	event.remove('ad_astra:compressor'),
	event.remove('ad_astra:solar_panel'),
	event.remove('ad_astra:water_pump'),
	event.remove('ad_astra:coal_generator'),
	event.remove('ad_astra:etrionic_blast_furnace'),
	event.remove('ad_astra:energizer'),
	event.remove('ad_astra:cryo_freezer'),
	event.remove('ad_astra:steel_cable'),
	event.remove('ad_astra:desh_cable'),
	event.remove('ad_astra:desh_fluid_pipe'),
	event.remove('ad_astra:ostrum_fluid_pipe'),
	event.remove('ad_astra:etrionic_capacitor'),
	event.remove('ad_astra:cable_duct'),
	event.remove('ad_astra:fluid_pipe_duct'),
	event.remove('#forge:ad_fluids')
})

//fluidos