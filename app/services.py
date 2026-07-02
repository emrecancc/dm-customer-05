from app.models import User
from sqlalchemy.orm import Session

class UserService:
    def __init__(self, db: Session):
        self.db = db

    def get_user(self, user_id):
        return self.db.query(User).filter(User.id == user_id).first()

    def create_user(self, user_data):
        user = User(**user_data)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def delete_user(self, user_id):
        user = self.get_user(user_id)
        if user:
            self.db.delete(user)
            self.db.commit()
        return user