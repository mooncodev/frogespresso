const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { epicService } = require('../services');

const createEpic = catchAsync(async (req, res) => {
  console.log(`[[[ controller, req.body: `, req.body);
  const epic = await epicService.createEpic(req.body);
  res.status(httpStatus.CREATED).send(epic);
});

const getEpics = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await epicService.queryEpics(filter, options);
  res.send(result);
});

const getEpic = catchAsync(async (req, res) => {
  const epic = await epicService.getEpicById(req.params.epicId);
  if (!epic) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Epic not found');
  }
  res.send(epic);
});

const updateEpic = catchAsync(async (req, res) => {
  const epic = await epicService.updateEpicById(req.params.epicId, req.body);
  res.send(epic);
});

const deleteEpic = catchAsync(async (req, res) => {
  await epicService.deleteEpicById(req.params.epicId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createEpic,
  getEpics,
  getEpic,
  updateEpic,
  deleteEpic,
};
