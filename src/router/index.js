import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Admin from '@/pages0/admin/Admin'
import Doctor from '@/pages0/doctor/Doctor'
import Therapist from '@/pages0/therapist/Therapist'

//Doctor
import Dindex from '@/pages0/doctor/Dindex'
import Dhistory from '@/pages0/doctor/Dhistory'
import Dinfor from '@/pages0/doctor/Dinfor'
import Zy from '@/pages0/doctor/Zy'
import Mz from '@/pages0/doctor/Mz'
import Hz from '@/pages0/doctor/Hz'
import Detail from '@/pages0/doctor/Detail'
import DetailMain from '@/pages0/doctor/DetailMain'
import Case from '@/pages0/doctor/Case'
import TreatmentRecord from '@/pages0/doctor/TreatmentRecord'
import FirstRecord from '@/pages0/doctor/FirstRecord'
import Dtreatment from '@/pages0/doctor/Dtreatment'
import TreamentHistory from '@/pages0/doctor/TreamentHistory'


//therapist
import Tindex from '@/pages0/therapist/Tindex'
import Thistory from '@/pages0/therapist/Thistory'
import Tinfor from '@/pages0/therapist/Tinfor'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin
		},
		{
			path: '/doctor',
			name: 'Doctor',
			component: Doctor,
			redirect: '/doctor/dindex',
			children:[{
				path:'dindex',
				name:'Dindex',
				component: Dindex,
				redirect: '/doctor/dindex/zy',
				children:[{
					path:'zy',
					name:'Zy',
					component:Zy
				},
				{
					path:'mz',
					name:'Mz',
					component:Mz
				},
				{
					path:'hz',
					name:'Hz',
					component:Hz
				}]
			},
			{
				path:'dhistory',
				name:'Dhistory',
				component: Dhistory
			},
			{
				path:'dinfor',
				name:'Dinfor',
				component: Dinfor
			}]
		},
		{
			path: '/detail',
			name: 'Detail',
			component: Detail,
			redirect:'/detail/dmain',
			children:[{
				path:'dmain',
				name:'DetailMain',
				component:DetailMain,
				redirect:'/detail/dmain/case',
				children:[{
					path:'case',
					name:'Case',
					component:Case
				},
				{
					path:'treatmentRecord',
					name:'TreatmentRecord',
					component:TreatmentRecord
				},
				{
					path:'firstRecord',
					name:'FirstRecord',
					component:FirstRecord
				}]
			},
			{
				path:'dtreatment',
				name:'Dtreatment',
				component:Dtreatment
			},
			{
				path:'treamentHistory',
				name:'TreamentHistory',
				component:TreamentHistory
			}]
		},
		//治疗师路由
		{
			path: '/therapist',
			name: 'Therapist',
			component: Therapist,
			redirect:'/therapist/tindex',
			children:[{
				path:'tindex',
				name:'Tindex',
				component:Tindex
			},
			{
				path:'thistory',
				name:'Thistory',
				component:Thistory
			},
			{
				path:'tinfor',
				name:'Tinfor',
				component:Tinfor
			}]
		},
		
	]
})