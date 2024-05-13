const request = require("supertest");
import app from "../app";

// Create trade testcase
describe("POST /api/trade", () => {
  it(`Should create a new trade`, async () => {
    const response = await request(app).post(`/api/trade`).send({
      type: "testcase",
      user_id: 48,
      symbol: "FIX",
      shares: 24,
      price: 128,
    });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("trade");
  });
});

// Get all trade tescase without query
describe("GET /api/trade", () => {
  it(`get all trade`, async () => {
    const response = await request(app).get(`/api/trade`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty(`trades`);
  });
});

// get trade by id testcase
describe(`GET /api/trade/:id`, () => {
  it(`get trade by id `, async () => {
    const response = await request(app).get(`/api/trade/${1}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty(`trade`);
  });
});

// failed to get trade by id
describe(`GET /api/trade/:id`, () => {
  it(`get trade by id not found`, async () => {
    const response = await request(app).get(`/api/trade/${23489}`);
    expect(response.statusCode).toBe(404);
  });
});

// update trade by id
describe(`GET /api/trade/:id`, () => {
  it(`update trade by id`, async () => {
    const response = await request(app)
      .patch(`/api/trade/${1}`)
      .send({ type: `testtype` });
    expect(response.statusCode).toBe(200);
  });
});

// update trade by id failed
describe(`GET /api/trade/:id`, () => {
  it(`update trade by id`, async () => {
    const response = await request(app)
      .patch(`/api/trade/${1234}`)
      .send({ type: `testtype` });
    expect(response.statusCode).toBe(405);
  });
});
