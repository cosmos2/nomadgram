from django.urls import path
from . import views

app_name = "images"
urlpatterns = [
    path("", view=views.Images.as_view(), name="images"),
    path("<int:image_id>/", view=views.ImageDetail.as_view(), name="images"),
    path("<int:image_id>/likes/", view=views.LikeImage.as_view(), name='like_image'),
    path("<int:image_id>/unlikes/", view=views.UnLikeImage.as_view(), name='unlike_image'),
    path("<int:image_id>/comments/", view=views.CommentOnImage.as_view(), name='comment_image'),
    path("<int:image_id>/comments/<int:comment_id>/", view=views.ModerateComments.as_view(), name='moderate_comments'),
    path("comments/<int:comment_id>/", view=views.Comment.as_view(), name='delete_comment'),
    path("search/", view=views.Search.as_view(), name='search'),
]
