import API from '../../API/API-requests';
import {
  CONFIGURATION_CREATE_FAIL,
  CONFIGURATION_CREATE_REQUEST,
  CONFIGURATION_CREATE_SUCCESS,
  CONFIGURATION_GET_FAIL,
  CONFIGURATION_GET_REQUEST,
  CONFIGURATION_GET_SUCCESS,
  CONFIGURATION_UPDATE_FAIL,
  CONFIGURATION_UPDATE_REQUEST,
  CONFIGURATION_UPDATE_SUCCESS,
  CONFIGURATION_DELETE_FAIL,
  CONFIGURATION_DELETE_REQUEST,
  CONFIGURATION_DELETE_SUCCESS,
  SCENARIO_CREATE_FAIL,
  SCENARIO_CREATE_REQUEST,
  SCENARIO_CREATE_SUCCESS,
  SCENARIO_DELETE_REQUEST,
  SCENARIO_DELETE_SUCCESS,
  SCENARIO_DELETE_FAIL,
  SCENARIOS_GET_FAIL,
  SCENARIOS_GET_REQUEST,
  SCENARIOS_GET_SUCCESS,
  SCENARIO_GET_FAIL,
  SCENARIO_GET_REQUEST,
  SCENARIO_GET_SUCCESS,
  SCENARIO_UPDATE_FAIL,
  SCENARIO_UPDATE_REQUEST,
  SCENARIO_UPDATE_SUCCESS,
} from '../constants/actionTypes';

const getConfiguration = (scenarioName) => async (dispatch) => {
  dispatch({ type: CONFIGURATION_GET_REQUEST });
  try {
    const res = await API.getConfiguration(scenarioName);
    dispatch({ type: CONFIGURATION_GET_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CONFIGURATION_GET_FAIL, payload: error });
  }
};

const createConfiguration = (name) => async (dispatch) => {
  dispatch({ type: CONFIGURATION_CREATE_REQUEST });
  try {
    const { data } = await API.createConfiguration(name);
    dispatch({
      type: CONFIGURATION_CREATE_SUCCESS,
      payload: { data, name },
    });
  } catch (error) {
    dispatch({ type: CONFIGURATION_CREATE_FAIL, payload: error });
  }
};
const updateConfiguration = (scenarioConfigName, elements) => async (dispatch) => {
  dispatch({ type: CONFIGURATION_UPDATE_REQUEST });
  try {
    const res = await API.updateConfiguration(scenarioConfigName, elements);
    dispatch({ type: CONFIGURATION_UPDATE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CONFIGURATION_UPDATE_FAIL, payload: error });
  }
};
const deleteConfiguration = (scenarioID) => async (dispatch) => {
  dispatch({ type: CONFIGURATION_DELETE_REQUEST });
  try {
    const res = await API.deleteConfiguration(scenarioID);
    dispatch({ type: CONFIGURATION_DELETE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CONFIGURATION_DELETE_FAIL, payload: error });
  }
};

const getAllScenarios = () => async (dispatch) => {
  dispatch({ type: SCENARIOS_GET_REQUEST });
  try {
    const { data } = await API.getAllScenarios();
    dispatch({ type: SCENARIOS_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SCENARIOS_GET_FAIL, payload: error });
  }
};
const getScenario = (scenarioName) => async (dispatch) => {
  dispatch({ type: SCENARIO_GET_REQUEST });
  try {
    const { data } = await API.getScenario(scenarioName);
    dispatch({ type: SCENARIO_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SCENARIO_GET_FAIL, payload: error });
  }
};
const createScenario = ({ name, description, image }) => async (dispatch) => {
  dispatch({ type: SCENARIO_CREATE_REQUEST });
  try {
    const { data } = await API.createScenario(name, description, image);
    dispatch(getAllScenarios());
    dispatch({ type: SCENARIO_CREATE_SUCCESS, payload: data });
    dispatch(createConfiguration(name));
  } catch (error) {
    dispatch({ type: SCENARIO_CREATE_FAIL, payload: error });
  }
};
const updateScenario = (scenarioName,scenario) => async (dispatch) => {
  dispatch({ type: SCENARIO_UPDATE_REQUEST });
  try {
    const res = await API.updateScenario(scenarioName,scenario);
    dispatch({ type: SCENARIO_UPDATE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: SCENARIO_UPDATE_FAIL, payload: error });
  }
};
const deleteScenario = (scenarioName) => async (dispatch) => {
  dispatch({ type: SCENARIO_DELETE_REQUEST });
  try {
    const res = await API.deleteScenario(scenarioName);
    dispatch({ type: SCENARIO_DELETE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: SCENARIO_DELETE_FAIL, payload: error });
  }
};

export {
  getConfiguration,
  createConfiguration,
  updateConfiguration,
  deleteConfiguration,
  getAllScenarios,
  getScenario,
  createScenario,
  updateScenario,
  deleteScenario,
};
