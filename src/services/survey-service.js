import { BASE_URL } from './Client'
import axios from 'axios'
import Client from './Client'

export const postSurvey = async (data) => {
  const survey = Client.post(`/surveys/new`, data)
  return survey.data
}
