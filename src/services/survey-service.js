import { BASE_URL } from './Client'
import axios from 'axios'
import Client from './Client'

export const postSurvey = async (data) => {
  const survey = Client.post(`/surveys/new`, data)
  return survey.data
}

export const getSurveyById = async (id) => {
  const survey = Client.get(`surveys/getbyid/${id}`)
  return survey.data
}
