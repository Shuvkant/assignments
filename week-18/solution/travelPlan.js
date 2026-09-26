"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTravelPlan = createTravelPlan;
exports.updateTravelPlan = updateTravelPlan;
exports.getTravelPlans = getTravelPlans;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/*
 * Function should insert a new travel plan for this user
 * Should return a travel plan object
 * {
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }
 */
function createTravelPlan(userId, title, destinationCity, destinationCountry, startDate, endDate, budget) {
    return __awaiter(this, void 0, void 0, function* () {
        const travelPlan = yield prisma.travelPlan.create({
            data: {
                userId,
                title,
                destinationCity,
                destinationCountry,
                startDate: new Date(startDate), // Convert to Date
                endDate: new Date(endDate), // Convert to Date
                budget,
            },
        });
        return travelPlan;
    });
}
/*
 * Function should update the budget or title for a specific travel plan
 * Should return the updated travel plan object
 */
function updateTravelPlan(planId, title, budget) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedTravelPlan = yield prisma.travelPlan.update({
            where: {
                id: planId,
            },
            data: Object.assign(Object.assign({}, (title && { title })), (budget !== undefined && { budget })),
        });
        return updatedTravelPlan;
    });
}
/*
 * Function should get all the travel plans of a given user
 * Should return an array of travel plan objects
 * [{
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }]
 */
function getTravelPlans(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const travelPlans = yield prisma.travelPlan.findMany({
            where: {
                userId,
            },
            select: {
                id: true,
                title: true,
                destinationCity: true,
                destinationCountry: true,
                startDate: true,
                endDate: true,
                budget: true,
            },
        });
        return travelPlans;
    });
}
