import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";


export const SEASON_SCHEDULE:Schedule[] = [
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'Persija',
    AwayTeam: 'Persikabo',HomeScore:3,AwayScore:2,RefName: "Joko",
    notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'Bali United',
    AwayTeam: 'Arema',HomeScore:3,AwayScore:2,RefName: "Kasjo",
    notes:'Pertandingan Santai'},
    {id:3,playingDate:new Date(2021,8,12),HomeTeam: 'Persipura',
    AwayTeam: 'Persib',HomeScore:3,AwayScore:2,RefName: "Parto",
    notes:'Pertandingan Overtime'},
    {id:4,playingDate:new Date(2021,8,13),HomeTeam: 'PSM',
    AwayTeam: 'Persisam',HomeScore:3,AwayScore:2,RefName: "Sule",
    notes:'Pertandingan Ada Kericuhan'},
    {id:5,playingDate:new Date(2021,8,14),HomeTeam: 'Mitra Kukar',
    AwayTeam: 'Persebaya',HomeScore:3,AwayScore:2,RefName: "Joki",
    notes:'Pertandingan Aman'},
]
export const TEAMS:Team [] = [
    {id:1,name:'Persija',type:'Over 30'},
    {id:2,name:'Persikabo',type:'Over 30'},
    {id:3,name:'Bali United',type:'Over 30'},
    {id:4,name:'Arema',type:'Over 30'},
    {id:5,name:'Persipura',type:'Over 30'},
    {id:6,name:'Persib',type:'Over 30'},
    {id:7,name:'Persisam',type:'Over 30'},
    {id:8,name:'PSM',type:'Over 30'},
    {id:9,name:'Mitra Kukar',type:'Over 30'},
    {id:10,name:'Persebaya',type:'Over 30'}
]