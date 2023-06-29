import { RequestHandler } from "express";

import {Cinema} from "../models/cinema.model";

export const createCinema: RequestHandler = async (req, res, next) => {
  var cinems = await Cinema.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Cinema created successfully", data: cinems });
};

export const deleteCinema: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedCinema: Cinema | null = await Cinema.findByPk(id);
  await Cinema.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Cinema deleted successfully", data: deletedCinema });
};

export const getAllCinema: RequestHandler = async (req, res, next) => {
  const allCinemas: Cinema[] = await Cinema.findAll();
  return res
    .status(200)
    .json({ message: "Cinema fetched successfully", data: allCinemas });
};

export const getCinemaById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const Cinemas: Cinema | null = await Cinema.findByPk(id);
  return res
    .status(200)
    .json({ message: "Cinema fetched successfully", data: Cinemas });
};

export const updateCinema: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Cinema.update({ ...req.body }, { where: { id } });
  const updatedCinemas: Cinema | null = await Cinema.findByPk(id);
  return res
    .status(200)
    .json({ message: "Cinema updated successfully", data: updatedCinemas });
};