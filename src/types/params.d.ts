declare type LoginResult = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}
declare type LoginParams = {
  code: string
  // encryptedData?: string
  // iv?: string
}
/** 个⼈信息 ⽤户详情信息 */
declare type ProfileDetail = {
  /** ⽤户ID */
  id: number
  /** 头像 */
  avatar: string
  /** 账户名 */
  account: string
  /** 昵称 */
  nickname?: string
  /** 性别 */
  gender?: Gender
  /** ⽣⽇ */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}
/** 性别 */
declare type Gender = '⼥' | '男'
/** 个⼈信息 修改请求体参数 */
