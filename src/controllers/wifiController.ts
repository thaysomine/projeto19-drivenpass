import { Request, Response } from "express";

import * as wifiRepository from "../repositories/wifiRepository.js";
import * as wifiService from "../services/wifiService.js";

export async function createWifi(req: Request, res: Response) {
    const data: wifiRepository.wifiInsertData = req.body;
    const userId = 1;
    await wifiService.createWifi(data, userId);
    console.log(data);
    res.sendStatus(201);
}   

export async function getWifis(req: Request, res: Response) {
    const userId = 1;
    const wifis = await wifiService.getWifis(userId);
    res.json(wifis);
}

export async function getWifiById(req: Request, res: Response) {
    const id = req.params.id;
    const userId = 1;
    const wifi = await wifiService.getWifiById(parseInt(id), userId);
    res.json(wifi);
}

export async function deleteWifi(req: Request, res: Response) {
    const id = req.params.id;
    const userId = 1;
    await wifiService.deleteWifi(parseInt(id), userId);
    res.sendStatus(204);
}