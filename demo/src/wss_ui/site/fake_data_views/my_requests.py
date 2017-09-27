from django.http import JsonResponse
from django.views import View

my_requests = {
  "my_requests": [
    {
      "requestor": "Raffaele FABOZZI",
      "request": {
        "type": "HR044 - Leave Application",
        "id": "HR-015715"
      },
      "history": [
        {
          "date": "Monday 26 June 2017",
          "author": "Submit by Raffaele FABOZZI",
          "message": 124
        }
      ],
      "status": {
        "steps": 4,
        "current": 1,
        "state": "working"
      },
      "details": [
        {
          "name": "Leave date",
          "value": "Friday 30 June 2017"
        }
      ],
      "actions": [
        "Approve",
        "Send Back"
      ],
      "defaultAction": "Approve"
    },
    {
      "requestor": "Michele MERCALDO",
      "request": {
        "type": "HR044 - Leave Application",
        "id": "HR-015710"
      },
      "history": [
        {
          "date": "Monday 26 June 2017",
          "author": "Submit by Michele MERCALDO"
        }
      ],
      "status": {
        "steps": 4,
        "current": 1,
        "state": "working"
      },
      "details": [
        {
          "name": "Leave date",
          "value": "Friday 30 June 2017"
        }
      ],
      "actions": [
        "Approve",
        "Send Back"
      ],
      "defaultAction": "Approve"
    },
    {
      "requestor": "Enrico GARAVINI",
      "request": {
        "type": "HR045b - Attendance sheet for Consultants and HQ SSAs (WINGS integrated)",
        "id": "HR-015703"
      },
      "history": [
        {
          "date": "Monday 26 June 2017",
          "author": "Submit by Enrico GARAVINI",
          "message": 124
        }
      ],
      "status": {
        "steps": 4,
        "current": 1,
        "state": "working"
      },
      "details": [
        {
          "name": "Leave date",
          "value": "Friday 30 June 2017"
        }
      ],
      "actions": [
        "Approve",
        "Send Back"
      ],
      "defaultAction": "Approve"
    },
    {
      "requestor": "Enrico GARAVINI",
      "request": {
        "type": "HR045b - Attendance sheet for Consultants and HQ SSAs (WINGS integrated)",
        "id": "HR-015703"
      },
      "history": [
        {
          "date": "Sunday 25 June 2017",
          "author": "Submit by Michele MERCALDO"
        },
        {
          "date": "Sunday 25 June 2017",
          "author": "Approve by Maurizio BLASILLI"
        },
        {
          "date": "Monday 26 June 2017",
          "author": "Approve by WINGS"
        }
      ],
      "status": {
        "steps": 4,
        "current": 4,
        "state": "success"
      },
      "details": [
        {
          "name": "Leave date",
          "value": "Friday 16 June 2017"
        }
      ],
      "actions": [
        "Delete",
      ],
      "defaultAction": "Delete"
    }
  ]
}


class MyRequestsJSON(View):
  def get(self, request, *args, **kwargs):
    if request.GET:
      filtered = {}
      filtered['my_requests'] = my_requests['my_requests'][2:]

      return JsonResponse(filtered)
    return JsonResponse(my_requests)
