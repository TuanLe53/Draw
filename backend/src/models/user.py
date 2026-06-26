from pydantic import BaseModel

class UserSchema(BaseModel):
    id: str
    name: str
    socket_id: str = ""
    is_host: bool = False
    is_ready: bool = False
    has_submitted: bool = False