Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	//Definir datos
	//El espacio de nombres "data" implica que ahí se mantiene información de la aplicación 
	//La clase Store implica un almacén de datos en cliente (puede ser fijo o provenir del servidor)
	Ext.create('Ext.data.Store', {   
    storeId: 'datosStore', //identificador del almacenamiento para usar posteriormente
    fields:['hora', 'materia'], //campos que forman el "registro"
    data: [ //Arreglo de objetos
		{ hora: '08:00-09:00', materia: 'Aplicaciones Enriquecidas de Internet' },
        { hora: '09:00-10:00', materia: 'Lenguajes y Autómatas ll'},
        { hora: '10:00-11:00', materia: 'Metodologías Emergentes para la Web' },
        { hora: '11:00-12:00', materia: 'Conmutación y Enrutamiendo en Redes de Datos' },
		{ hora: '12:00-13:00', materia: 'Arquitectura de software para la Web' },
		{ hora: '13:00-14:00', materia: 'Programación Lógica y Funcional' },
		{ hora: '14:00-15:00', materia: 'Sistemas Programables' }
		]
	});
	
	//Definir tabla y relacionarla
	Ext.create('Ext.grid.Panel', {
		title: 'Horario de clases',
		store: Ext.data.StoreManager.lookup('datosStore'),
		columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
			{ text: 'Hora',
				dataIndex: 'hora',
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Lunes',
				dataIndex: 'materia', //nombre del "campo" del "registro"
				flex: 1
		    },
			{ text: 'Martes',
				dataIndex: 'materia', 
				flex: 1
			},
			{ text: 'Miércoles',
				dataIndex: 'materia',
				flex: 1
			},
			{ text: 'Jueves',
				dataIndex: 'materia',
				flex: 1
			},
			{ text: 'Viernes',
				dataIndex: 'materia',
				flex: 1
			}
		],
		
		height: 250,
		width: 1000,
		renderTo: Ext.getBody() //se pega al body
	});
});