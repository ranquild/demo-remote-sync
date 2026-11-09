export const accounts = {
  /* metadata: { "description": "Information on customer accounts registered with Piespace. Each account represents a new organization signing up for on-demand pies.", "databaseName": "Sample Database", "tableName": "ACCOUNTS" } */
  type: "table",
  id: 6,
  name: "Accounts",
  fields: {
    activeSubscription: {
      /* metadata: { "displayName": "Active Subscription", "baseType": "type/Boolean" } */
      type: "column",
      name: "ACTIVE_SUBSCRIPTION",
      slug: "active_subscription",
      jsType: "boolean",
      fieldId: 42,
      tableId: 6
    },
    canceledAt: {
      /* metadata: { "displayName": "Canceled At", "baseType": "type/DateTime", "semanticType": "type/CancelationTimestamp" } */
      type: "column",
      name: "CANCELED_AT",
      slug: "canceled_at",
      jsType: "Date",
      fieldId: 39,
      tableId: 6
    },
    country: {
      /* metadata: { "displayName": "Country", "baseType": "type/Text", "semanticType": "type/Country" } */
      type: "column",
      name: "COUNTRY",
      slug: "country",
      jsType: "string",
      fieldId: 56,
      tableId: 6
    },
    createdAt: {
      /* metadata: { "displayName": "Created At", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
      type: "column",
      name: "CREATED_AT",
      slug: "created_at",
      jsType: "Date",
      fieldId: 31,
      tableId: 6
    },
    email: {
      /* metadata: { "displayName": "Email", "baseType": "type/Text", "semanticType": "type/Email" } */
      type: "column",
      name: "EMAIL",
      slug: "email",
      jsType: "string",
      fieldId: 62,
      tableId: 6
    },
    firstName: {
      /* metadata: { "displayName": "First Name", "baseType": "type/Text", "semanticType": "type/Name" } */
      type: "column",
      name: "FIRST_NAME",
      slug: "first_name",
      jsType: "string",
      fieldId: 37,
      tableId: 6
    },
    id: {
      /* metadata: { "displayName": "ID", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 24,
      tableId: 6
    },
    lastName: {
      /* metadata: { "displayName": "Last Name", "baseType": "type/Text", "semanticType": "type/Name" } */
      type: "column",
      name: "LAST_NAME",
      slug: "last_name",
      jsType: "string",
      fieldId: 36,
      tableId: 6
    },
    latitude: {
      /* metadata: { "displayName": "Latitude", "baseType": "type/Float", "semanticType": "type/Latitude" } */
      type: "column",
      name: "LATITUDE",
      slug: "latitude",
      jsType: "number",
      fieldId: 57,
      tableId: 6
    },
    legacyPlan: {
      /* metadata: { "displayName": "Legacy Plan", "baseType": "type/Boolean" } */
      type: "column",
      name: "LEGACY_PLAN",
      slug: "legacy_plan",
      jsType: "boolean",
      fieldId: 47,
      tableId: 6
    },
    longitude: {
      /* metadata: { "displayName": "Longitude", "baseType": "type/Float", "semanticType": "type/Longitude" } */
      type: "column",
      name: "LONGITUDE",
      slug: "longitude",
      jsType: "number",
      fieldId: 21,
      tableId: 6
    },
    plan: {
      /* metadata: { "displayName": "Plan", "baseType": "type/Text", "semanticType": "type/Category" } */
      type: "column",
      name: "PLAN",
      slug: "plan",
      jsType: "string",
      fieldId: 43,
      tableId: 6
    },
    seats: {
      /* metadata: { "displayName": "Seats", "baseType": "type/Integer" } */
      type: "column",
      name: "SEATS",
      slug: "seats",
      jsType: "number",
      fieldId: 33,
      tableId: 6
    },
    source: {
      /* metadata: { "displayName": "Source", "baseType": "type/Text", "semanticType": "type/Source" } */
      type: "column",
      name: "SOURCE",
      slug: "source",
      jsType: "string",
      fieldId: 41,
      tableId: 6
    },
    trialConverted: {
      /* metadata: { "displayName": "Trial Converted", "baseType": "type/Boolean" } */
      type: "column",
      name: "TRIAL_CONVERTED",
      slug: "trial_converted",
      jsType: "boolean",
      fieldId: 38,
      tableId: 6
    },
    trialEndsAt: {
      /* metadata: { "displayName": "Trial Ends At", "baseType": "type/DateTime" } */
      type: "column",
      name: "TRIAL_ENDS_AT",
      slug: "trial_ends_at",
      jsType: "Date",
      fieldId: 40,
      tableId: 6
    }
  }
} as const;

export const analyticEvents = {
  /* metadata: { "description": "Piespace does some anonymous analytics tracking on how users interact with their platform. They’ve only had time to implement a few events, but you know how it is. Pies come first.", "databaseName": "Sample Database", "tableName": "ANALYTIC_EVENTS" } */
  type: "table",
  id: 7,
  name: "Analytic Events",
  fields: {
    accountId: {
      /* metadata: { "displayName": "Account ID", "baseType": "type/BigInteger", "semanticType": "type/FK" } */
      type: "column",
      name: "ACCOUNT_ID",
      slug: "account_id",
      jsType: "number",
      fieldId: 45,
      tableId: 7
    },
    buttonLabel: {
      /* metadata: { "displayName": "Button Label", "baseType": "type/Text", "semanticType": "type/Category" } */
      type: "column",
      name: "BUTTON_LABEL",
      slug: "button_label",
      jsType: "string",
      fieldId: 29,
      tableId: 7
    },
    event: {
      /* metadata: { "displayName": "Event", "baseType": "type/Text", "semanticType": "type/Category" } */
      type: "column",
      name: "EVENT",
      slug: "event",
      jsType: "string",
      fieldId: 32,
      tableId: 7
    },
    id: {
      /* metadata: { "displayName": "ID", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 60,
      tableId: 7
    },
    pageUrl: {
      /* metadata: { "displayName": "Page URL", "baseType": "type/Text", "semanticType": "type/URL" } */
      type: "column",
      name: "PAGE_URL",
      slug: "page_url",
      jsType: "string",
      fieldId: 49,
      tableId: 7
    },
    timestamp: {
      /* metadata: { "displayName": "Timestamp", "baseType": "type/DateTime" } */
      type: "column",
      name: "TIMESTAMP",
      slug: "timestamp",
      jsType: "Date",
      fieldId: 35,
      tableId: 7
    }
  }
} as const;

export const feedback = {
  /* metadata: { "description": "With each order of pies sent out, Piespace includes a place for customers to submit feedback and review their order.", "databaseName": "Sample Database", "tableName": "FEEDBACK" } */
  type: "table",
  id: 5,
  name: "Feedback",
  fields: {
    accountId: {
      /* metadata: { "displayName": "Account ID", "baseType": "type/BigInteger", "semanticType": "type/FK" } */
      type: "column",
      name: "ACCOUNT_ID",
      slug: "account_id",
      jsType: "number",
      fieldId: 25,
      tableId: 5
    },
    body: {
      /* metadata: { "displayName": "Body", "baseType": "type/Text" } */
      type: "column",
      name: "BODY",
      slug: "body",
      jsType: "string",
      fieldId: 28,
      tableId: 5
    },
    dateReceived: {
      /* metadata: { "displayName": "Date Received", "baseType": "type/DateTime" } */
      type: "column",
      name: "DATE_RECEIVED",
      slug: "date_received",
      jsType: "Date",
      fieldId: 27,
      tableId: 5
    },
    email: {
      /* metadata: { "displayName": "Email", "baseType": "type/Text", "semanticType": "type/Email" } */
      type: "column",
      name: "EMAIL",
      slug: "email",
      jsType: "string",
      fieldId: 26,
      tableId: 5
    },
    id: {
      /* metadata: { "displayName": "ID", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 20,
      tableId: 5
    },
    rating: {
      /* metadata: { "displayName": "Rating", "baseType": "type/Integer", "semanticType": "type/Score" } */
      type: "column",
      name: "RATING",
      slug: "rating",
      jsType: "number",
      fieldId: 22,
      tableId: 5
    },
    ratingMapped: {
      /* metadata: { "displayName": "Rating Mapped", "baseType": "type/Text", "semanticType": "type/Category" } */
      type: "column",
      name: "RATING_MAPPED",
      slug: "rating_mapped",
      jsType: "string",
      fieldId: 23,
      tableId: 5
    }
  }
} as const;

export const invoices = {
  /* metadata: { "description": "Confirmed payments from Piespace’s customers. Most accounts pay for their pie subscription on a monthly basis.", "databaseName": "Sample Database", "tableName": "INVOICES" } */
  type: "table",
  id: 8,
  name: "Invoices",
  fields: {
    accountId: {
      /* metadata: { "displayName": "Account ID", "baseType": "type/BigInteger", "semanticType": "type/FK" } */
      type: "column",
      name: "ACCOUNT_ID",
      slug: "account_id",
      jsType: "number",
      fieldId: 66,
      tableId: 8
    },
    dateReceived: {
      /* metadata: { "displayName": "Date Received", "baseType": "type/DateTime" } */
      type: "column",
      name: "DATE_RECEIVED",
      slug: "date_received",
      jsType: "Date",
      fieldId: 71,
      tableId: 8
    },
    expectedInvoice: {
      /* metadata: { "displayName": "Expected Invoice", "baseType": "type/Boolean" } */
      type: "column",
      name: "EXPECTED_INVOICE",
      slug: "expected_invoice",
      jsType: "boolean",
      fieldId: 70,
      tableId: 8
    },
    id: {
      /* metadata: { "displayName": "ID", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 68,
      tableId: 8
    },
    payment: {
      /* metadata: { "displayName": "Payment", "baseType": "type/Float" } */
      type: "column",
      name: "PAYMENT",
      slug: "payment",
      jsType: "number",
      fieldId: 64,
      tableId: 8
    },
    plan: {
      /* metadata: { "displayName": "Plan", "baseType": "type/Text", "semanticType": "type/Category" } */
      type: "column",
      name: "PLAN",
      slug: "plan",
      jsType: "string",
      fieldId: 46,
      tableId: 8
    }
  }
} as const;

export const orders = {
  /* metadata: { "description": "Confirmed Sample Company orders for a product, from a user.", "databaseName": "Sample Database", "tableName": "ORDERS" } */
  type: "table",
  id: 2,
  name: "Orders",
  fields: {
    createdAt: {
      /* metadata: { "displayName": "Created At", "description": "The date and time an order was submitted.", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
      type: "column",
      name: "CREATED_AT",
      slug: "created_at",
      jsType: "Date",
      fieldId: 13,
      tableId: 2
    },
    discount: {
      /* metadata: { "displayName": "Discount", "description": "Discount amount.", "baseType": "type/Float", "semanticType": "type/Discount" } */
      type: "column",
      name: "DISCOUNT",
      slug: "discount",
      jsType: "number",
      fieldId: 3,
      tableId: 2
    },
    id: {
      /* metadata: { "displayName": "ID", "description": "This is a unique ID for the product. It is also called the “Invoice number” or “Confirmation number” in customer facing emails and screens.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 9,
      tableId: 2
    },
    productId: {
      /* metadata: { "displayName": "Product ID", "description": "The product ID. This is an internal identifier for the product, NOT the SKU.", "baseType": "type/Integer", "semanticType": "type/FK" } */
      type: "column",
      name: "PRODUCT_ID",
      slug: "product_id",
      jsType: "number",
      fieldId: 14,
      tableId: 2
    },
    quantity: {
      /* metadata: { "displayName": "Quantity", "description": "Number of products bought.", "baseType": "type/Integer", "semanticType": "type/Quantity" } */
      type: "column",
      name: "QUANTITY",
      slug: "quantity",
      jsType: "number",
      fieldId: 2,
      tableId: 2
    },
    subtotal: {
      /* metadata: { "displayName": "Subtotal", "description": "The raw, pre-tax cost of the order. Note that this might be different in the future from the product price due to promotions, credits, etc.", "baseType": "type/Float" } */
      type: "column",
      name: "SUBTOTAL",
      slug: "subtotal",
      jsType: "number",
      fieldId: 10,
      tableId: 2
    },
    tax: {
      /* metadata: { "displayName": "Tax", "description": "This is the amount of local and federal taxes that are collected on the purchase. Note that other governmental fees on some products are not included here, but instead are accounted for in the subtotal.", "baseType": "type/Float" } */
      type: "column",
      name: "TAX",
      slug: "tax",
      jsType: "number",
      fieldId: 6,
      tableId: 2
    },
    total: {
      /* metadata: { "displayName": "Total", "description": "The total billed amount.", "baseType": "type/Float" } */
      type: "column",
      name: "TOTAL",
      slug: "total",
      jsType: "number",
      fieldId: 5,
      tableId: 2
    },
    userId: {
      /* metadata: { "displayName": "User ID", "description": "The id of the user who made this order. Note that in some cases where an order was created on behalf of a customer who phoned the order in, this might be the employee who handled the request.", "baseType": "type/Integer", "semanticType": "type/FK" } */
      type: "column",
      name: "USER_ID",
      slug: "user_id",
      jsType: "number",
      fieldId: 11,
      tableId: 2
    }
  }
} as const;

export const people = {
  /* metadata: { "description": "Information on the user accounts registered with Sample Company.", "databaseName": "Sample Database", "tableName": "PEOPLE" } */
  type: "table",
  id: 1,
  name: "People",
  fields: {
    address: {
      /* metadata: { "displayName": "Address", "description": "The street address of the account’s billing address", "baseType": "type/Text" } */
      type: "column",
      name: "ADDRESS",
      slug: "address",
      jsType: "string",
      fieldId: 51,
      tableId: 1
    },
    birthDate: {
      /* metadata: { "displayName": "Birth Date", "description": "The date of birth of the user", "baseType": "type/Date" } */
      type: "column",
      name: "BIRTH_DATE",
      slug: "birth_date",
      jsType: "Date",
      fieldId: 12,
      tableId: 1
    },
    city: {
      /* metadata: { "displayName": "City", "description": "The city of the account’s billing address", "baseType": "type/Text", "semanticType": "type/City" } */
      type: "column",
      name: "CITY",
      slug: "city",
      jsType: "string",
      fieldId: 53,
      tableId: 1
    },
    createdAt: {
      /* metadata: { "displayName": "Created At", "description": "The date the user record was created. Also referred to as the user’s \"join date\"", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
      type: "column",
      name: "CREATED_AT",
      slug: "created_at",
      jsType: "Date",
      fieldId: 50,
      tableId: 1
    },
    email: {
      /* metadata: { "displayName": "Email", "description": "The contact email for the account.", "baseType": "type/Text", "semanticType": "type/Email" } */
      type: "column",
      name: "EMAIL",
      slug: "email",
      jsType: "string",
      fieldId: 7,
      tableId: 1
    },
    id: {
      /* metadata: { "displayName": "ID", "description": "A unique identifier given to each user.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 4,
      tableId: 1
    },
    latitude: {
      /* metadata: { "displayName": "Latitude", "description": "This is the latitude of the user on sign-up. It might be updated in the future to the last seen location.", "baseType": "type/Float", "semanticType": "type/Latitude" } */
      type: "column",
      name: "LATITUDE",
      slug: "latitude",
      jsType: "number",
      fieldId: 52,
      tableId: 1
    },
    longitude: {
      /* metadata: { "displayName": "Longitude", "description": "This is the longitude of the user on sign-up. It might be updated in the future to the last seen location.", "baseType": "type/Float", "semanticType": "type/Longitude" } */
      type: "column",
      name: "LONGITUDE",
      slug: "longitude",
      jsType: "number",
      fieldId: 58,
      tableId: 1
    },
    name: {
      /* metadata: { "displayName": "Name", "description": "The name of the user who owns an account", "baseType": "type/Text", "semanticType": "type/Name" } */
      type: "column",
      name: "NAME",
      slug: "name",
      jsType: "string",
      fieldId: 48,
      tableId: 1
    },
    password: {
      /* metadata: { "displayName": "Password", "description": "This is the salted password of the user. It should not be visible", "baseType": "type/Text" } */
      type: "column",
      name: "PASSWORD",
      slug: "password",
      jsType: "string",
      fieldId: 54,
      tableId: 1
    },
    source: {
      /* metadata: { "displayName": "Source", "description": "The channel through which we acquired this user. Valid values include: Affiliate, Facebook, Google, Organic and Twitter", "baseType": "type/Text", "semanticType": "type/Source" } */
      type: "column",
      name: "SOURCE",
      slug: "source",
      jsType: "string",
      fieldId: 30,
      tableId: 1
    },
    state: {
      /* metadata: { "displayName": "State", "description": "The state or province of the account’s billing address", "baseType": "type/Text", "semanticType": "type/State" } */
      type: "column",
      name: "STATE",
      slug: "state",
      jsType: "string",
      fieldId: 1,
      tableId: 1
    },
    zip: {
      /* metadata: { "displayName": "Zip", "description": "The postal code of the account’s billing address", "baseType": "type/Text", "semanticType": "type/ZipCode" } */
      type: "column",
      name: "ZIP",
      slug: "zip",
      jsType: "string",
      fieldId: 61,
      tableId: 1
    }
  }
} as const;

export const products = {
  /* metadata: { "description": "Includes a catalog of all the products ever sold by the famed Sample Company.", "databaseName": "Sample Database", "tableName": "PRODUCTS" } */
  type: "table",
  id: 3,
  name: "Products",
  fields: {
    category: {
      /* metadata: { "displayName": "Category", "description": "The type of product, valid values include: Doohicky, Gadget, Gizmo and Widget", "baseType": "type/Text", "semanticType": "type/Category" } */
      type: "column",
      name: "CATEGORY",
      slug: "category",
      jsType: "string",
      fieldId: 18,
      tableId: 3
    },
    createdAt: {
      /* metadata: { "displayName": "Created At", "description": "The date the product was added to our catalog.", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
      type: "column",
      name: "CREATED_AT",
      slug: "created_at",
      jsType: "Date",
      fieldId: 63,
      tableId: 3
    },
    ean: {
      /* metadata: { "displayName": "Ean", "description": "The international article number. A 13 digit number uniquely identifying the product.", "baseType": "type/Text" } */
      type: "column",
      name: "EAN",
      slug: "ean",
      jsType: "string",
      fieldId: 15,
      tableId: 3
    },
    id: {
      /* metadata: { "displayName": "ID", "description": "The numerical product number. Only used internally. All external communication should use the title or EAN.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 8,
      tableId: 3
    },
    price: {
      /* metadata: { "displayName": "Price", "description": "The list price of the product. Note that this is not always the price the product sold for due to discounts, promotions, etc.", "baseType": "type/Float" } */
      type: "column",
      name: "PRICE",
      slug: "price",
      jsType: "number",
      fieldId: 44,
      tableId: 3
    },
    rating: {
      /* metadata: { "displayName": "Rating", "description": "The average rating users have given the product. This ranges from 1 - 5", "baseType": "type/Float", "semanticType": "type/Score" } */
      type: "column",
      name: "RATING",
      slug: "rating",
      jsType: "number",
      fieldId: 16,
      tableId: 3
    },
    title: {
      /* metadata: { "displayName": "Title", "description": "The name of the product as it should be displayed to customers.", "baseType": "type/Text", "semanticType": "type/Title" } */
      type: "column",
      name: "TITLE",
      slug: "title",
      jsType: "string",
      fieldId: 17,
      tableId: 3
    },
    vendor: {
      /* metadata: { "displayName": "Vendor", "description": "The source of the product.", "baseType": "type/Text", "semanticType": "type/Company" } */
      type: "column",
      name: "VENDOR",
      slug: "vendor",
      jsType: "string",
      fieldId: 34,
      tableId: 3
    }
  }
} as const;

export const reviews = {
  /* metadata: { "description": "Reviews that Sample Company customers have left on our products.", "databaseName": "Sample Database", "tableName": "REVIEWS" } */
  type: "table",
  id: 4,
  name: "Reviews",
  fields: {
    body: {
      /* metadata: { "displayName": "Body", "description": "The review the user left. Limited to 2000 characters.", "baseType": "type/Text", "semanticType": "type/Description" } */
      type: "column",
      name: "BODY",
      slug: "body",
      jsType: "string",
      fieldId: 69,
      tableId: 4
    },
    createdAt: {
      /* metadata: { "displayName": "Created At", "description": "The day and time a review was written by a user.", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
      type: "column",
      name: "CREATED_AT",
      slug: "created_at",
      jsType: "Date",
      fieldId: 55,
      tableId: 4
    },
    id: {
      /* metadata: { "displayName": "ID", "description": "A unique internal identifier for the review. Should not be used externally.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
      type: "column",
      name: "ID",
      slug: "id",
      jsType: "number",
      fieldId: 59,
      tableId: 4
    },
    productId: {
      /* metadata: { "displayName": "Product ID", "description": "The product the review was for", "baseType": "type/Integer", "semanticType": "type/FK" } */
      type: "column",
      name: "PRODUCT_ID",
      slug: "product_id",
      jsType: "number",
      fieldId: 65,
      tableId: 4
    },
    rating: {
      /* metadata: { "displayName": "Rating", "description": "The rating (on a scale of 1-5) the user left.", "baseType": "type/Integer", "semanticType": "type/Score" } */
      type: "column",
      name: "RATING",
      slug: "rating",
      jsType: "number",
      fieldId: 19,
      tableId: 4
    },
    reviewer: {
      /* metadata: { "displayName": "Reviewer", "description": "The user who left the review", "baseType": "type/Text" } */
      type: "column",
      name: "REVIEWER",
      slug: "reviewer",
      jsType: "string",
      fieldId: 67,
      tableId: 4
    }
  }
} as const;

export const schema = {
  schemaVersion: 3,
  generatedAt: "2026-11-09T14:26:10.510735Z",
  metabase: {
    instanceUrl: "http://localhost:3000"
  },
  tables: {
    accounts,
    analyticEvents,
    feedback,
    invoices,
    orders,
    people,
    products,
    reviews
  },
  metrics: { }
} as const;
