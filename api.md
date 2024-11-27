### 1. 회원가입
**URL**: `/api/register`
**Method**: POST
**Request Body**:
```json
{
    "name": "string",
    "phone_number": "string"
}
```
**Response**:
```json
{
    "id": "number",
    "name": "string",
    "role": "string"
}
```
### 2. 로그인
**URL**: `/api/auth`
**Method**: POST 
**Request Body**:
```json
{
    "name": "string",
    "phone_number": "string"
}
```
**Response**:
```json
{
    "token": "string",
    "iat": "number",
    "exp": "number"
}
```
### 3. 헬스체크
**URL**: `/api/health`
**Method**: GET
**Response**: "Healthy..."
## 인증 필요 API 엔드포인트
### 1. 프로필 조회
**URL**: `/api/private/profile`
**Method**: GET
**Headers**: Authorization: Bearer {token}
**Response**:
```json
{
    "id": "number",
    "name": "string",
    "role": "string"
}
```
## 관리자 전용 API 엔드포인트
### 1. 전체 사용자 조회
**URL**: `/api/admin/allUsers`
**Method**: GET
**Headers**: Authorization: Bearer {token}
**Response**:
```json
[
    {
        "id": "number",
        "name": "string",
        "role": "string"
    }
]
```
### 2. 티켓 생성
**URL**: `/api/admin/createTickets`
**Method**: POST
**Headers**: Authorization: Bearer {token}
**Request Body**:
```json
{
    "users_id": ["number"]
}
```
**Response**:
```json
[
    {
        "user_id": "number",
        "ticket_number": "string",
        "message": "string"
    }
]
```
### 3. 티켓 랭킹 조회
**URL**: `/api/admin/ticketRanking`
**Method**: GET
**Headers**: Authorization: Bearer {token}
**Response**:
```json
[
    {
        "user_id": "number",
        "name": "string",
        "ticket_count": "number"
    }
]
```
