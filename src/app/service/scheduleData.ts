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
    {id:4,playingDate:new Date(2021,8,13),HomeTeam: 'Persija',
    AwayTeam: 'Persib',HomeScore:3,AwayScore:2,RefName: "Sule",
    notes:'Pertandingan Ada Kericuhan'},
    {id:5,playingDate:new Date(2021,8,14),HomeTeam: 'Persija',
    AwayTeam: 'Persikabo',HomeScore:3,AwayScore:2,RefName: "Joki",
    notes:'Pertandingan Selow'},
]
export const TEAMS:Team [] = [
    {id:1,name:'Persija',type:'Over 30'},
    {id:2,name:'Persikabo',type:'Over 30'},
    {id:3,name:'Bali United',type:'Over 30'},
    {id:4,name:'Arema',type:'Over 30'},
    {id:5,name:'Persipura',type:'Over 30'},
    {id:6,name:'Persib',type:'Over 30'},
]