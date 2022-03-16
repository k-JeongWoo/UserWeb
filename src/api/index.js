import axios from 'axios'
// HTTP Request & Response 와 관련된 기본 설정
const config = {
  // baseUrl: 'https://api.cellimedi.com/svc/V1.0/'
  baseUrl: 'http://sgn-stg.neodreams.co.kr:8080/svc/V1.0/'
}
/* API - 리스트 목록 조회 */
// 로그인 정보 조회
function fetchLoginUserInfo () {
  return axios.get(`${config.baseUrl}user/userInfo`, {withCredentials: true})
}
// 사용자 메인화면
function fetchUserMain () {
  return axios.get(`${config.baseUrl}user/userHealthMain`, {withCredentials: true})
}
// 사용자 수정 화면
function fetchUserUpdate (objectValue) {
  return axios.post(`${config.baseUrl}user/userUpdate`, objectValue, {withCredentials: true})
}

export {
  fetchLoginUserInfo,
  fetchUserMain,
  fetchUserUpdate
}
