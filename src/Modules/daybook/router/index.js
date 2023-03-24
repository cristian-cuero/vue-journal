
export default {

    
        name: 'daybook',
        component: () => import(/* webpackChunkName: "daybook" */ '@/Modules/daybook/layouts/DayBookLayout.vue'),
        children: [
           {
                path:'',
                name:'no-entry',
                component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/Modules/daybook/view/NoEntrySelected.vue'),

           },
           {
                path:':id',
                name:'entry',
                component: () => import(/* webpackChunkName: "daybook-entry" */ '@/Modules/daybook/view/EntryView.vue'),

           },

        ]
      
}