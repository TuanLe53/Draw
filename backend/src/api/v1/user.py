from fastapi import APIRouter, Depends
from src.services.user_service import UserService
from src.models.user import UserSchema

router = APIRouter()

def get_user_service() -> UserService:
    return UserService()

@router.post("/", response_model=UserSchema)
async def create_user(nickname: str, user_service: UserService = Depends(get_user_service)):
    new_user = await user_service.create_user(nickname=nickname)
    return new_user