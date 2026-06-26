import uuid
from src.models.user import UserSchema

class UserService:

    async def create_user(self, nickname: str) -> UserSchema:
        user_id = f"usr_{str(uuid.uuid4())[:12]}"
        user = {
            "id": user_id,
            "name": nickname,
            "socket_id": "",
            "is_host": False,
            "is_ready": False,
            "has_submitted": False
        }

        return UserSchema(**user)
    