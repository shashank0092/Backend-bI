import express from "express"
import {sampleTripData} from "./taxidata.js"
import {data} from "./data.js"
import cors from "cors"
import {AccidentSeries,MotorPerformanceSeries,RidesSeries,TotalRevnueSeries,TotalSellsSeries,TotalTicketsSeries,UsageScoreSeries,UserActiveSeries,UserChurnSeries,BatteryPerformanceSeries} from "./charts.js"
const app=express()

app.use(cors(
   {
    origin:"*",
   }
    
))

app.get("/taxi_data",async(req,res)=>{
    res.json(sampleTripData)
})



app.get("/accident_data",async(req,res)=>{
    res.json(AccidentSeries)
})
app.get("/motor_performance_data",async(req,res)=>{
    res.json(MotorPerformanceSeries)
})

app.get("/battey_performance_data",async(req,res)=>{
    res.json(BatteryPerformanceSeries)
})

app.get("/rides_data",async(req,res)=>{
    res.json(RidesSeries)
})

app.get("/total_revnue_data",async(req,res)=>{
    res.json(TotalRevnueSeries)
})

app.get("/total_sells_data",async(req,res)=>{
    res.json(TotalSellsSeries)
})

app.get("/total_ticket_data",async(req,res)=>{
    res.json(TotalTicketsSeries)
})

app.get("/active_user_data",async(req,res)=>{
    res.json(UserActiveSeries)
})

app.get("/usage_score_data",async(req,res)=>{
    res.json(UsageScoreSeries)
})

app.get("/user_churn_data",async(req,res)=>{
    res.json(UserChurnSeries)
})

app.get("/ride_data",async(req,res)=>{
    res.json(data)
})

app.listen(5000,()=>{
    console.log("Running on port 5000")
})