from django.http import JsonResponse
from django.views import View

awaiting_action_requests = {
    "count": 10,
    "next": None,
    "previous": None,
    "results": [
      {
        "id": 4,
        "user": {
          "id": 6,
          "indexno": "08821867",
          "username": "laura.silvani",
          "first_name": "Laura",
          "last_name": "SILVANI",
          "email": "laura.silvani@wfp.org"
        },
        "date_of_submit": "2017-09-05",
        "current_status": "deleted",
        "module_class": "HR045b",
        "info": {
          "status": [
            {
              "current": 0,
              "state": "",
              "steps": 0
            }
          ],
          "url": "/HR045b/hr045b/4/detail/",
          "actions": {
            "default": "",
            "others": []
          },
          "details": [],
          "type": "Attendance sheet for Consultants and HQ SSAs (WINGS Integrated)",
          "id": "HR-000004"
        },
        "history": [
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:24:52.239028Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T08:28:53.347203Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:30:54.706794Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T08:31:31.156240Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:31:38.408849Z"
          }
        ]
      },
      {
        "id": 5,
        "user": {
          "id": 6,
          "indexno": "08821867",
          "username": "laura.silvani",
          "first_name": "Laura",
          "last_name": "SILVANI",
          "email": "laura.silvani@wfp.org"
        },
        "date_of_submit": "2017-09-05",
        "current_status": "deleted",
        "module_class": "HR045b",
        "info": {
          "status": [
            {
              "current": 0,
              "state": "",
              "steps": 0
            }
          ],
          "url": "/HR045b/hr045b/5/detail/",
          "actions": {
            "default": "",
            "others": []
          },
          "details": [],
          "type": "Attendance sheet for Consultants and HQ SSAs (WINGS Integrated)",
          "id": "HR-000005"
        },
        "history": [
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T09:50:34.273157Z"
          }
        ]
      },
      {
        "id": 6,
        "user": {
          "id": 6,
          "indexno": "08821867",
          "username": "laura.silvani",
          "first_name": "Laura",
          "last_name": "SILVANI",
          "email": "laura.silvani@wfp.org"
        },
        "date_of_submit": "2017-09-05",
        "current_status": "deleted",
        "module_class": "HR045b",
        "info": {
          "status": [
            {
              "current": 0,
              "state": "",
              "steps": 0
            }
          ],
          "url": "/HR045b/hr045b/6/detail/",
          "actions": {
            "default": "",
            "others": []
          },
          "details": [],
          "type": "Attendance sheet for Consultants and HQ SSAs (WINGS Integrated)",
          "id": "HR-000006"
        },
        "history": [
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:38:11.679309Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T08:39:32.076410Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:39:36.959125Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T08:41:00.238654Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:41:07.257147Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T08:43:38.382317Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:43:47.587919Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T08:45:47.543503Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T08:45:59.671334Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T09:00:11.407684Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T09:00:36.553077Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T09:06:20.686895Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T09:17:34.847026Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T09:19:07.346989Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T09:19:12.124558Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T09:21:18.636018Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T09:21:27.193255Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "recall",
            "timestamp": "2017-09-05T09:22:25.983563Z"
          },
          {
            "user": {
              "id": 6,
              "indexno": "08821867",
              "username": "laura.silvani",
              "first_name": "Laura",
              "last_name": "SILVANI",
              "email": "laura.silvani@wfp.org"
            },
            "transition": "submit",
            "timestamp": "2017-09-05T09:22:35.831213Z"
          }
        ]
      }
    ]
}



class AwaitingActionsRequestsJSON(View):
  def get(self, request, *args, **kwargs):
    return JsonResponse(awaiting_action_requests)
