var debug = false;


var user = {
    name: "Maurizio BLASILLI",
    picture: "/images/default-avatar.gif",
};

var labels = {
    /* GENERIC */
    home: "Home",
    incoming_requests: "Incoming requests",
    my_requests: "My requests",
    awaiting_your_action: "Awaiting your action",
    your_latest_requests: "Your latest requests",
    request_id:"Request ID",
    requestor:"Requestor",
    approvers:"Approver(s)",
    request:"Request",
    submission_date:"Submission date",
    history:"History",
    status:"Status",
    details:"Details",
    action:"Actions",
    overview:"Overview",

    /* CTA */
    view_all:"View All",
    create_a_request: "Create a request",
    delete_request: "Delete this request",
    download_as_PDF: "Download as PDF",
    submit_form: "Submit form",
    save_changes: "Save changes",

    /* FORM CREATION */
    latest_forms_used: "Latest forms used",
    all_forms: "All forms",
    all_forms_az: "All forms by alphabetical order",
    filtered_forms: "Forms",
    filtered_howtos: "How do I",
    filtered_links: "Links",
    all_forms_topic: "All forms by topics",
    order_by: "Order by: ",
    az: "A-Z",
    topics: "TOPICS",
    wings_date: "WINGS effective/processing date",
    completion_date: "Completion date",

    /* FORM MY / INCOMING REQUEST */
    show_filters:"Show filters",
    hide_filters:"Hide filters",
    form:"Form",
    status: "Status",
    clear_form:"Clear",
    filter_form:"Filter",
    creation_date:"Creation date:",
    dates: "Dates",
    from:"From *",
    to:"To *",
    officer:"Officer",


};

var form = [];
form['HR044'] = {
    fields: {
        /* LEAVE FORM */
        title: "Leave / Absence application (HR-044)",
        show_my_leave_balances: "Show my leave balances",
        hide_my_leave_balances: "Hide my leave balances",
        leave_type: "Leave type",
        the_form_will_be_submitted_on_behalf_of: "The form will be submitted on behalf of",
        leave_description: "If you have insufficient quota or no quota please contact your Time-Keeper if advanced annual leave feasable. See <a href='#'>HR Manual Section</a> V.1 \'Annual Leave\'.",
        number_of_working_days: "Number of working days",
        contact_details_while_absent: "Contact details while absent",
        information_details: "Information details",
        required_fields:"required fields",
        change_requestor: "Change requestor",
        please_select_appropriate_option: "Please select appropriate option",
        full_days: "Full days",
        half_day_AM: "Half day AM",
        half_day_PM: "Half day PM",
        supervisor: "Supervisor",
        category: "Category",
        available: "Available",
        used: "Used",
        entitlement: "Entitlement",
    },
    values:{
        leave_balances: [
            {
                category:{
                    type: "Annual leave",
                    validity: "Valid until 28/12/2018"
                },
                available: "28 days",
                used: "28 days",
                entitlement: "28 days",
            },
        ],
    },
    description: "",
    metadata:[],
}

var my_requests = [];
var requests_awaiting = [
    {
        requestor:"Michele FABOZZI",
        request: {type:"HR044 - Leave Application", id:"HR-017097"},
        history:[
            {date: "Monday 26 June 2017", author: "Submit by Raffaele FABOZZI", message:124}
        ],
        status:{
            steps:4,
            current:2,
            state:"working",
            require_action_msg:"SUPERVISOR ACKNOWLEDGE<br>You have to confirm to acknowledge the request.x"
        },
        details:[
            {name:"Leave date", value:"Friday 30 June 2017"}
        ],
        actions:[
            {name:"Acknowledge", mode:"wfp-btn--primary"}, 
        ]
    },
    {
        requestor:"Michele MERCALDO",
        request: {type:"HR044 - Leave Application", id:"HR-015710"},
        history:[{date: "Monday 26 June 2017", author: "Submit by Raffaele FABOZZI", message:124}],
        status:{
            steps:4,
            current:2,
            state:"working"
        },
        details:[
            {name:"Leave date", value:"Friday 30 June 2017"}
        ],
        actions:[
            {name:"Approve", mode:"wfp-btn--primary"}, 
        ],
        secondary_actions:[
            {name:"Reject", mode:"other"},
            {name:"Send Back", mode:"other"},
        ]
    },
    {
        requestor:"Enrico GARAVINI",
        request: {type:"HR045b - Attendance sheet for Consultants and HQ SSAs (WINGS integrated)", id:"HR-015703"},
        history:[{date: "Monday 26 June 2017", author: "Submit by Enrico GARAVINI"}],
        status:{
            steps:3,
            current:2,
            state:"working"
        },
        details:[
            {name:"Leave date", value:"Friday 30 June 2017"}
        ],
        actions:[]
    }
];

var requests_latest = [
    {
        request: {type:"HR044 - Leave Application", id:"HR-017097"},
        submission_date: "Saturday, 10 June 2017",
        history:[{date: "Monday 26 June 2017", author: "Submit by Enrico GARAVINI"}],
        status:{
            steps:4,
            current:1,
            state:"working"
        },
        details:[
            {name:"Leave date", value:"Thursday 22 June 2017"}
        ],
        actions:[
            
            {name:"Delete", mode:"wfp-btn--negative"}, 
        ]
    },
    {
        request: {type:"HR044 - Leave Application", id:"HR-015592"},
        submission_date: "Saturday, 10 June 2017",
        history:[
            {date: "Monday 26 June 2017", author: "Submit by Maurizio BLASILLI"},
            {date: "Thursday 30 June 2017", author: "Send back by Daniela TALONE"}
        ],
        status:{
            steps:4,
            current:2,
            state:"working",
            require_action:true,
            require_action_msg:"ERROR<br>The request has been returned from WINGS. Check the reason for the error in the 'Info' tab of the request."
        },
        details:[
            {name:"Leave date", value:"Thursday 22 June 2017"}
        ],
        actions:[
            
        ],
    },
    {
        request: {type:"HR044 - Leave Application", id:"HR-015591"},
        submission_date: "Saturday, 10 June 2017",
        history:[{date: "Monday 26 June 2017", author: "Submit by Enrico GARAVINI"}],
        status:{
            steps:3,
            current:3,
            state:"success"
        },
        details:[
            {name:"Leave date", value:"Monday 5 June 2017"}
        ],
        actions:[
            
            {name:"Delete", mode:"wfp-btn--negative"}, 
        ]
    }
];

var requests_incoming = [
    {
        request: {type:"HR044 - Leave Application", id:"HR-015715"},
        history:[{date: "Monday 26 June 2017", author: "Submit by Raffaele FABOZZI", message:124}],
        status:{
            steps:4,
            current:1,
            state:"working"
        },
        details:[
            {name:"Leave date", value:"Friday 30 June 2017"}
        ],
        actions:{}
    },
    {
        requestor:"Michele MERCALDO",
        request: {type:"HR044 - Leave Application", id:"HR-015710"},
        history:[
            {date: "Monday 26 June 2017", author: "Submit by Raffaele FABOZZI"}
        ],
        status:{
            steps:4,
            current:1,
            state:"working"
        },
        details:[
            {name:"Leave date", value:"Friday 30 June 2017"}
        ],
        actions:{}
    },
    {
        requestor:"Enrico GARAVINI",
        request: {type:"HR045b - Attendance sheet for Consultants and HQ SSAs (WINGS integrated)", id:"HR-015703"},
        history:[
            {date: "Monday 26 June 2017", author: "Submit by Enrico GARAVINI", message:124}
        ],
        status:{
            steps:4,
            current:1,
            state:"working"
        },
        details:[
            {name:"Leave date", value:"Friday 30 June 2017"}
        ],
        actions:{}
    },
    {
        requestor:"Enrico GARAVINI",
        request: {type:"HR045b - Attendance sheet for Consultants and HQ SSAs (WINGS integrated)", id:"HR-015703"},
        history:[
            {date: "Sunday 25 June 2017", author: "Submit by Michele MERCALDO"},
            {date: "Sunday 25 June 2017", author: "Approve by Maurizio BLASILLI"},
            {date: "Monday 26 June 2017", author: "Approve by WINGS"},
        ],
        status:{
            steps:4,
            current:4,
            state:"success"
        },
        details:[
            {name:"Leave date", value:"Friday 16 June 2017"}
        ],
        actions:{}
    }
];

var latest_forms = [
    {
        name:"Leave / Absence application",
        description:"HR044 - This is the description for this form",
        ident:"form_HR044"
    },
    {
        name:"Related party disclosure",
        description:"[Test] Related Party Disclosure - This is the description for this form",
        ident:"form_related_party"
    },
    {
        name:"Rental subsidy / advance / deduction",
        description:"HR039 - This form regards Eucation Grant Requests. Submit this form for processing of payment.",
        ident:"form_HR039"
    },
    {
        name:"Telecommuting arrangement (TCA)",
        description:"HR027 - This is the description for this form",
        ident:"form_HR027"
    },

];

var request = {};
request['HR-017097'] = {
    name: "Leave / Absence application",
    request_date: "Monday 26 September 2017",
    submission_date: "Tuesday 27 September 2017",
    request_id: "HR-017097",
    requestor: "Maurizio BLASILLI",
    approvers: "Daniela TALONE (Supervisor)",
    status: {
        steps:4,
        current:2,
        state:"working",
        require_action_msg:"SUPERVISOR ACKNOWLEDGE<br>You have to confirm to acknowledge the request.x"
    },
    completion_date: null,
    wings_date: null,
    meta:[
        {name:"Leave Type", value:"Annual Leave"},
        {name:"Request days type", value:"Full day(s)"},
        {name:"Dates", value:"Monday 17 July 2017 - Friday 21 July 2017 (5 working days)"},
        {name:"Contact details while absent", value:"No contact detail specified"},
        {name:"Additional information", value:"No additional information"}
    ]
}

var formslist_by_az = [
    {
        heading:"A",
        name:"Attendance sheet for consultancy and HQ SSAs",
        description:"HR045 - This is the description for this form",
        ident:"form_HR045"
    },
    {
        heading:"B",
        name:"Banking instruction for non-payroll related payments",
        description:"HR033 - This is the description for this form",
        ident:"form_HR033"
    },
    {
        heading:"C",
        name:"Certificate of attendance and statementof school expenditures",
        description:"HR028 - This is the description for this form",
        ident:"form_HR028"
    },
    {
        heading:"D",
        name:"Designation of beneficiary",
        description:"HR051 - This is the description for this form",
        ident:"form_HR051"
    },
    {
        heading:"E",
        name:"Education grant advance",
        description:"HR039 - This is the description for this form",
        ident:"form_HR039"
    },
    {
        name:"Education grant claim",
        description:"HR037 - This is the description for this form",
        ident:"form_HR037"
    },
    {
        name:"Emergency contact address",
        description:"HR038 - This is the description for this form",
        ident:"form_HR038"
    },
    {
        heading:"G",
        name:"Gift declaration",
        description:"Gift Declaration - This is the description for this form",
        ident:"form_gift"
    },
    {
        heading:"I",
        name:"IT System access request",
        description:"IT0015 - This is the description for this form",
        ident:"form_IT001"
    },
    {
        heading:"L",
        name:"Leave / Absence application",
        description:"HR044 - This is the description for this form",
        ident:"form_HR044"
    },
    {
        heading:"P",
        name:"Personal IDs",
        description:"Personal IDs - This is the description for this form",
        ident:"form_personalIDs"
    },
    {
        name:"Privileged (ADM) network access",
        description:"Privileged (ADM) network access - This is the description for this form",
        ident:"form_privileged"
    },
    {
        heading:"R",
        name:"Rental subsidy / advance / deduction",
        description:"HR027 - This is the description for this form",
        ident:"form_HR027"
    },
    {
        heading:"S",
        name:"Salary allotment instructions",
        description:"HR049 - This is the description for this form",
        ident:"form_HR049"
    },
    {
        heading:"T",
        name:"Telecommuting arrangement (TCA)",
        description:"HR078 - This is the description for this form",
        ident:"form_HR078"
    },
];

var formslist_by_topics = [
    {
        heading:"TOPIC 1",
        name:"Attendance sheet for consultancy and HQ SSAs",
        description:"HR045 - This is the description for this form",
        ident:"form_HR045"
    },
    {
        name:"Banking instruction for non-payroll related payments",
        description:"HR033 - This is the description for this form",
        ident:"form_HR033"
    },
    {
        name:"Certificate of attendance and statementof school expenditures",
        description:"HR028 - This is the description for this form",
        ident:"form_HR028"
    },
    {
        heading:"TOPIC 2",
        name:"Designation of beneficiary",
        description:"HR051 - This is the description for this form",
        ident:"form_HR051"
    },
    {
        name:"Education grant advance",
        description:"HR039 - This is the description for this form",
        ident:"form_HR039"
    },
    {
        name:"Education grant claim",
        description:"HR037 - This is the description for this form",
        ident:"form_HR037"
    },
    {
        name:"Emergency contact address",
        description:"HR038 - This is the description for this form",
        ident:"form_HR038"
    },
    {
        heading:"TOPIC 3",
        name:"Gift declaration",
        description:"Gift Declaration - This is the description for this form",
        ident:"form_gift"
    },
    {
        name:"IT System access request",
        description:"IT0015 - This is the description for this form",
        ident:"form_IT001"
    },
    {
        name:"Leave / Absence application",
        description:"HR044 - This is the description for this form",
        ident:"form_HR044"
    },
    {
        name:"Personal IDs",
        description:"Personal IDs - This is the description for this form",
        ident:"form_personalIDs"
    },
    {
        name:"Privileged (ADM) network access",
        description:"Privileged (ADM) network access - This is the description for this form",
        ident:"form_privileged"
    },
    {
        name:"Rental subsidy / advance / deduction",
        description:"HR027 - This is the description for this form",
        ident:"form_HR027"
    },
    {
        heading:"TOPIC 4",
        name:"Salary allotment instructions",
        description:"HR049 - This is the description for this form",
        ident:"form_HR049"
    },
    {
        name:"Telecommuting arrangement (TCA)",
        description:"HR078 - This is the description for this form",
        ident:"form_HR078"
    },
];

var search_how_to = [
    {
        name:"Access SCIPS, get training and find FOB prices.",
        description: "Description"
    },
    {
        name:"Rental Subsidy/Advance/Deduction",
        description: "Description"
    },
    {
        name:"Access the Gender Toolkit",
        description: "Description"
    },
];

var search_links = [
    {
        name:"Access SCIPS, get training and find FOB prices.",
        description: "Description"
    },
    {
        name:"Rental Subsidy/Advance/Deduction",
        description: "Description"
    },
];