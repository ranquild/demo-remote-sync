const tables = {
  accounts: {
    /* metadata: { "databaseName": "QA Postgres", "schemaName": "public" } */
    type: "table",
    id: 212,
    name: "Accounts",
    fields: {
      activeSubscription: {
        /* metadata: { "displayName": "Active Subscription", "baseType": "type/Boolean" } */
        type: "column",
        name: "active_subscription",
        slug: "active_subscription",
        jsType: "boolean",
        fieldId: 2165,
        tableId: 212
      },
      canceledAt: {
        /* metadata: { "displayName": "Canceled At", "baseType": "type/DateTime", "semanticType": "type/CancelationTimestamp" } */
        type: "column",
        name: "canceled_at",
        slug: "canceled_at",
        jsType: "Date",
        fieldId: 2163,
        tableId: 212
      },
      country: {
        /* metadata: { "displayName": "Country", "baseType": "type/Text", "semanticType": "type/Country" } */
        type: "column",
        name: "country",
        slug: "country",
        jsType: "string",
        fieldId: 2169,
        tableId: 212
      },
      createdAt: {
        /* metadata: { "displayName": "Created At", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
        type: "column",
        name: "created_at",
        slug: "created_at",
        jsType: "Date",
        fieldId: 2161,
        tableId: 212
      },
      email: {
        /* metadata: { "displayName": "Email", "baseType": "type/Text", "semanticType": "type/Email" } */
        type: "column",
        name: "email",
        slug: "email",
        jsType: "string",
        fieldId: 2155,
        tableId: 212
      },
      firstName: {
        /* metadata: { "displayName": "First Name", "baseType": "type/Text", "semanticType": "type/Name" } */
        type: "column",
        name: "first_name",
        slug: "first_name",
        jsType: "string",
        fieldId: 2156,
        tableId: 212
      },
      id: {
        /* metadata: { "displayName": "ID", "baseType": "type/Integer", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2154,
        tableId: 212
      },
      lastName: {
        /* metadata: { "displayName": "Last Name", "baseType": "type/Text" } */
        type: "column",
        name: "last_name",
        slug: "last_name",
        jsType: "string",
        fieldId: 2157,
        tableId: 212
      },
      latitude: {
        /* metadata: { "displayName": "Latitude", "baseType": "type/Float", "semanticType": "type/Latitude" } */
        type: "column",
        name: "latitude",
        slug: "latitude",
        jsType: "number",
        fieldId: 2167,
        tableId: 212
      },
      legacyPlan: {
        /* metadata: { "displayName": "Legacy Plan", "baseType": "type/Boolean" } */
        type: "column",
        name: "legacy_plan",
        slug: "legacy_plan",
        jsType: "boolean",
        fieldId: 2166,
        tableId: 212
      },
      longitude: {
        /* metadata: { "displayName": "Longitude", "baseType": "type/Float", "semanticType": "type/Longitude" } */
        type: "column",
        name: "longitude",
        slug: "longitude",
        jsType: "number",
        fieldId: 2168,
        tableId: 212
      },
      plan: {
        /* metadata: { "displayName": "Plan", "baseType": "type/Text", "semanticType": "type/Category" } */
        type: "column",
        name: "plan",
        slug: "plan",
        jsType: "string",
        fieldId: 2158,
        tableId: 212
      },
      seats: {
        /* metadata: { "displayName": "Seats", "baseType": "type/Integer" } */
        type: "column",
        name: "seats",
        slug: "seats",
        jsType: "number",
        fieldId: 2160,
        tableId: 212
      },
      source: {
        /* metadata: { "displayName": "Source", "baseType": "type/Text", "semanticType": "type/Source" } */
        type: "column",
        name: "source",
        slug: "source",
        jsType: "string",
        fieldId: 2159,
        tableId: 212
      },
      trialConverted: {
        /* metadata: { "displayName": "Trial Converted", "baseType": "type/Boolean" } */
        type: "column",
        name: "trial_converted",
        slug: "trial_converted",
        jsType: "boolean",
        fieldId: 2164,
        tableId: 212
      },
      trialEndsAt: {
        /* metadata: { "displayName": "Trial Ends At", "baseType": "type/DateTime" } */
        type: "column",
        name: "trial_ends_at",
        slug: "trial_ends_at",
        jsType: "Date",
        fieldId: 2162,
        tableId: 212
      }
    }
  },
  analyticEvents: {
    /* metadata: { "databaseName": "QA Postgres", "schemaName": "public", "tableName": "analytic_events" } */
    type: "table",
    id: 213,
    name: "Analytic Events",
    fields: {
      accountId: {
        /* metadata: { "displayName": "Account ID", "baseType": "type/Integer", "semanticType": "type/FK" } */
        type: "column",
        name: "account_id",
        slug: "account_id",
        jsType: "number",
        fieldId: 2171,
        tableId: 213
      },
      buttonLabel: {
        /* metadata: { "displayName": "Button Label", "baseType": "type/Text", "semanticType": "type/Category" } */
        type: "column",
        name: "button_label",
        slug: "button_label",
        jsType: "string",
        fieldId: 2175,
        tableId: 213
      },
      event: {
        /* metadata: { "displayName": "Event", "baseType": "type/Text", "semanticType": "type/Category" } */
        type: "column",
        name: "event",
        slug: "event",
        jsType: "string",
        fieldId: 2172,
        tableId: 213
      },
      id: {
        /* metadata: { "displayName": "ID", "baseType": "type/Integer", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2170,
        tableId: 213
      },
      pageUrl: {
        /* metadata: { "displayName": "Page URL", "baseType": "type/Text", "semanticType": "type/URL" } */
        type: "column",
        name: "page_url",
        slug: "page_url",
        jsType: "string",
        fieldId: 2174,
        tableId: 213
      },
      timestamp: {
        /* metadata: { "displayName": "Timestamp", "baseType": "type/DateTime" } */
        type: "column",
        name: "timestamp",
        slug: "timestamp",
        jsType: "Date",
        fieldId: 2173,
        tableId: 213
      }
    }
  },
  feedback: {
    /* metadata: { "databaseName": "QA Postgres", "schemaName": "public" } */
    type: "table",
    id: 214,
    name: "Feedback",
    fields: {
      accountId: {
        /* metadata: { "displayName": "Account ID", "baseType": "type/Integer", "semanticType": "type/FK" } */
        type: "column",
        name: "account_id",
        slug: "account_id",
        jsType: "number",
        fieldId: 2177,
        tableId: 214
      },
      body: {
        /* metadata: { "displayName": "Body", "baseType": "type/Text" } */
        type: "column",
        name: "body",
        slug: "body",
        jsType: "string",
        fieldId: 2182,
        tableId: 214
      },
      dateReceived: {
        /* metadata: { "displayName": "Date Received", "baseType": "type/DateTime" } */
        type: "column",
        name: "date_received",
        slug: "date_received",
        jsType: "Date",
        fieldId: 2179,
        tableId: 214
      },
      email: {
        /* metadata: { "displayName": "Email", "baseType": "type/Text", "semanticType": "type/Email" } */
        type: "column",
        name: "email",
        slug: "email",
        jsType: "string",
        fieldId: 2178,
        tableId: 214
      },
      id: {
        /* metadata: { "displayName": "ID", "baseType": "type/Integer", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2176,
        tableId: 214
      },
      rating: {
        /* metadata: { "displayName": "Rating", "baseType": "type/Integer", "semanticType": "type/Score" } */
        type: "column",
        name: "rating",
        slug: "rating",
        jsType: "number",
        fieldId: 2180,
        tableId: 214
      },
      ratingMapped: {
        /* metadata: { "displayName": "Rating Mapped", "baseType": "type/Text", "semanticType": "type/Category" } */
        type: "column",
        name: "rating_mapped",
        slug: "rating_mapped",
        jsType: "string",
        fieldId: 2181,
        tableId: 214
      }
    }
  },
  invoices: {
    /* metadata: { "databaseName": "QA Postgres", "schemaName": "public" } */
    type: "table",
    id: 215,
    name: "Invoices",
    fields: {
      accountId: {
        /* metadata: { "displayName": "Account ID", "baseType": "type/Integer", "semanticType": "type/FK" } */
        type: "column",
        name: "account_id",
        slug: "account_id",
        jsType: "number",
        fieldId: 2184,
        tableId: 215
      },
      dateReceived: {
        /* metadata: { "displayName": "Date Received", "baseType": "type/DateTime" } */
        type: "column",
        name: "date_received",
        slug: "date_received",
        jsType: "Date",
        fieldId: 2188,
        tableId: 215
      },
      expectedInvoice: {
        /* metadata: { "displayName": "Expected Invoice", "baseType": "type/Boolean" } */
        type: "column",
        name: "expected_invoice",
        slug: "expected_invoice",
        jsType: "boolean",
        fieldId: 2186,
        tableId: 215
      },
      id: {
        /* metadata: { "displayName": "ID", "baseType": "type/Integer", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2183,
        tableId: 215
      },
      payment: {
        /* metadata: { "displayName": "Payment", "baseType": "type/Decimal" } */
        type: "column",
        name: "payment",
        slug: "payment",
        jsType: "number",
        fieldId: 2185,
        tableId: 215
      },
      plan: {
        /* metadata: { "displayName": "Plan", "baseType": "type/Text", "semanticType": "type/Category" } */
        type: "column",
        name: "plan",
        slug: "plan",
        jsType: "string",
        fieldId: 2187,
        tableId: 215
      }
    }
  },
  orders: {
    /* metadata: { "description": "This is a confirmed order for a product from a user.", "databaseName": "QA Postgres", "schemaName": "public" } */
    type: "table",
    id: 216,
    name: "Orders",
    fields: {
      createdAt: {
        /* metadata: { "displayName": "Created At", "description": "The date and time an order was submitted.", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
        type: "column",
        name: "created_at",
        slug: "created_at",
        jsType: "Date",
        fieldId: 2196,
        tableId: 216
      },
      discount: {
        /* metadata: { "displayName": "Discount", "description": "Discount amount.", "baseType": "type/Float", "semanticType": "type/Discount" } */
        type: "column",
        name: "discount",
        slug: "discount",
        jsType: "number",
        fieldId: 2195,
        tableId: 216
      },
      id: {
        /* metadata: { "displayName": "ID", "description": "This is a unique ID for the product. It is also called the “Invoice number” or “Confirmation number” in customer facing emails and screens.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2189,
        tableId: 216
      },
      productId: {
        /* metadata: { "displayName": "Product ID", "description": "The product ID. This is an internal identifier for the product, NOT the SKU.", "baseType": "type/Integer", "semanticType": "type/FK" } */
        type: "column",
        name: "product_id",
        slug: "product_id",
        jsType: "number",
        fieldId: 2191,
        tableId: 216
      },
      quantity: {
        /* metadata: { "displayName": "Quantity", "description": "Number of products bought.", "baseType": "type/Integer", "semanticType": "type/Quantity" } */
        type: "column",
        name: "quantity",
        slug: "quantity",
        jsType: "number",
        fieldId: 2197,
        tableId: 216
      },
      subtotal: {
        /* metadata: { "displayName": "Subtotal", "description": "The raw, pre-tax cost of the order. Note that this might be different in the future from the product price due to promotions, credits, etc.", "baseType": "type/Float" } */
        type: "column",
        name: "subtotal",
        slug: "subtotal",
        jsType: "number",
        fieldId: 2192,
        tableId: 216
      },
      tax: {
        /* metadata: { "displayName": "Tax", "description": "This is the amount of local and federal taxes that are collected on the purchase. Note that other governmental fees on some products are not included here, but instead are accounted for in the subtotal.", "baseType": "type/Float" } */
        type: "column",
        name: "tax",
        slug: "tax",
        jsType: "number",
        fieldId: 2193,
        tableId: 216
      },
      total: {
        /* metadata: { "displayName": "Total", "description": "The total billed amount.", "baseType": "type/Float" } */
        type: "column",
        name: "total",
        slug: "total",
        jsType: "number",
        fieldId: 2194,
        tableId: 216
      },
      userId: {
        /* metadata: { "displayName": "User ID", "description": "The id of the user who made this order. Note that in some cases where an order was created on behalf of a customer who phoned the order in, this might be the employee who handled the request.", "baseType": "type/Integer", "semanticType": "type/FK" } */
        type: "column",
        name: "user_id",
        slug: "user_id",
        jsType: "number",
        fieldId: 2190,
        tableId: 216
      }
    }
  },
  people: {
    /* metadata: { "description": "This is a user account. Note that employees and customer support staff will have accounts.", "databaseName": "QA Postgres", "schemaName": "public" } */
    type: "table",
    id: 217,
    name: "People",
    fields: {
      address: {
        /* metadata: { "displayName": "Address", "description": "The street address of the account’s billing address", "baseType": "type/Text" } */
        type: "column",
        name: "address",
        slug: "address",
        jsType: "string",
        fieldId: 2199,
        tableId: 217
      },
      birthDate: {
        /* metadata: { "displayName": "Birth Date", "description": "The date of birth of the user", "baseType": "type/Date" } */
        type: "column",
        name: "birth_date",
        slug: "birth_date",
        jsType: "Date",
        fieldId: 2207,
        tableId: 217
      },
      city: {
        /* metadata: { "displayName": "City", "description": "The city of the account’s billing address", "baseType": "type/Text", "semanticType": "type/City" } */
        type: "column",
        name: "city",
        slug: "city",
        jsType: "string",
        fieldId: 2203,
        tableId: 217
      },
      createdAt: {
        /* metadata: { "displayName": "Created At", "description": "The date the user record was created. Also referred to as the user’s \"join date\"", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
        type: "column",
        name: "created_at",
        slug: "created_at",
        jsType: "Date",
        fieldId: 2210,
        tableId: 217
      },
      email: {
        /* metadata: { "displayName": "Email", "description": "The contact email for the account.", "baseType": "type/Text", "semanticType": "type/Email" } */
        type: "column",
        name: "email",
        slug: "email",
        jsType: "string",
        fieldId: 2200,
        tableId: 217
      },
      id: {
        /* metadata: { "displayName": "ID", "description": "A unique identifier given to each user.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2198,
        tableId: 217
      },
      latitude: {
        /* metadata: { "displayName": "Latitude", "description": "This is the latitude of the user on sign-up. It might be updated in the future to the last seen location.", "baseType": "type/Float", "semanticType": "type/Latitude" } */
        type: "column",
        name: "latitude",
        slug: "latitude",
        jsType: "number",
        fieldId: 2209,
        tableId: 217
      },
      longitude: {
        /* metadata: { "displayName": "Longitude", "description": "This is the longitude of the user on sign-up. It might be updated in the future to the last seen location.", "baseType": "type/Float", "semanticType": "type/Longitude" } */
        type: "column",
        name: "longitude",
        slug: "longitude",
        jsType: "number",
        fieldId: 2204,
        tableId: 217
      },
      name: {
        /* metadata: { "displayName": "Name", "description": "The name of the user who owns an account", "baseType": "type/Text", "semanticType": "type/Name" } */
        type: "column",
        name: "name",
        slug: "name",
        jsType: "string",
        fieldId: 2202,
        tableId: 217
      },
      password: {
        /* metadata: { "displayName": "Password", "description": "This is the salted password of the user. It should not be visible", "baseType": "type/Text" } */
        type: "column",
        name: "password",
        slug: "password",
        jsType: "string",
        fieldId: 2201,
        tableId: 217
      },
      source: {
        /* metadata: { "displayName": "Source", "description": "The channel through which we acquired this user. Valid values include: Affiliate, Facebook, Google, Organic and Twitter", "baseType": "type/Text", "semanticType": "type/Source" } */
        type: "column",
        name: "source",
        slug: "source",
        jsType: "string",
        fieldId: 2206,
        tableId: 217
      },
      state: {
        /* metadata: { "displayName": "State", "description": "The state or province of the account’s billing address", "baseType": "type/Text", "semanticType": "type/State" } */
        type: "column",
        name: "state",
        slug: "state",
        jsType: "string",
        fieldId: 2205,
        tableId: 217
      },
      zip: {
        /* metadata: { "displayName": "Zip", "description": "The postal code of the account’s billing address", "baseType": "type/Text" } */
        type: "column",
        name: "zip",
        slug: "zip",
        jsType: "string",
        fieldId: 2208,
        tableId: 217
      }
    }
  },
  products: {
    /* metadata: { "description": "This is our product catalog. It includes all products ever sold by the Sample Company.", "databaseName": "QA Postgres", "schemaName": "public" } */
    type: "table",
    id: 218,
    name: "Products",
    fields: {
      category: {
        /* metadata: { "displayName": "Category", "description": "The type of product, valid values include: Doohicky, Gadget, Gizmo and Widget", "baseType": "type/Text", "semanticType": "type/Category" } */
        type: "column",
        name: "category",
        slug: "category",
        jsType: "string",
        fieldId: 2214,
        tableId: 218
      },
      createdAt: {
        /* metadata: { "displayName": "Created At", "description": "The date the product was added to our catalog.", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
        type: "column",
        name: "created_at",
        slug: "created_at",
        jsType: "Date",
        fieldId: 2218,
        tableId: 218
      },
      ean: {
        /* metadata: { "displayName": "Ean", "description": "The international article number. A 13 digit number uniquely identifying the product.", "baseType": "type/Text" } */
        type: "column",
        name: "ean",
        slug: "ean",
        jsType: "string",
        fieldId: 2212,
        tableId: 218
      },
      id: {
        /* metadata: { "displayName": "ID", "description": "The numerical product number. Only used internally. All external communication should use the title or EAN.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2211,
        tableId: 218
      },
      price: {
        /* metadata: { "displayName": "Price", "description": "The list price of the product. Note that this is not always the price the product sold for due to discounts, promotions, etc.", "baseType": "type/Float" } */
        type: "column",
        name: "price",
        slug: "price",
        jsType: "number",
        fieldId: 2216,
        tableId: 218
      },
      rating: {
        /* metadata: { "displayName": "Rating", "description": "The average rating users have given the product. This ranges from 1 - 5", "baseType": "type/Float", "semanticType": "type/Score" } */
        type: "column",
        name: "rating",
        slug: "rating",
        jsType: "number",
        fieldId: 2217,
        tableId: 218
      },
      title: {
        /* metadata: { "displayName": "Title", "description": "The name of the product as it should be displayed to customers.", "baseType": "type/Text", "semanticType": "type/Title" } */
        type: "column",
        name: "title",
        slug: "title",
        jsType: "string",
        fieldId: 2213,
        tableId: 218
      },
      vendor: {
        /* metadata: { "displayName": "Vendor", "description": "The source of the product.", "baseType": "type/Text", "semanticType": "type/Company" } */
        type: "column",
        name: "vendor",
        slug: "vendor",
        jsType: "string",
        fieldId: 2215,
        tableId: 218
      }
    }
  },
  reviews: {
    /* metadata: { "description": "These are reviews our customers have left on products. Note that these are not tied to orders so it is possible people have reviewed products they did not purchase from us.", "databaseName": "QA Postgres", "schemaName": "public" } */
    type: "table",
    id: 219,
    name: "Reviews",
    fields: {
      body: {
        /* metadata: { "displayName": "Body", "description": "The review the user left. Limited to 2000 characters.", "baseType": "type/Text" } */
        type: "column",
        name: "body",
        slug: "body",
        jsType: "string",
        fieldId: 2223,
        tableId: 219
      },
      createdAt: {
        /* metadata: { "displayName": "Created At", "description": "The day and time a review was written by a user.", "baseType": "type/DateTime", "semanticType": "type/CreationTimestamp" } */
        type: "column",
        name: "created_at",
        slug: "created_at",
        jsType: "Date",
        fieldId: 2224,
        tableId: 219
      },
      id: {
        /* metadata: { "displayName": "ID", "description": "A unique internal identifier for the review. Should not be used externally.", "baseType": "type/BigInteger", "semanticType": "type/PK" } */
        type: "column",
        name: "id",
        slug: "id",
        jsType: "number",
        fieldId: 2219,
        tableId: 219
      },
      productId: {
        /* metadata: { "displayName": "Product ID", "description": "The product the review was for", "baseType": "type/Integer", "semanticType": "type/FK" } */
        type: "column",
        name: "product_id",
        slug: "product_id",
        jsType: "number",
        fieldId: 2220,
        tableId: 219
      },
      rating: {
        /* metadata: { "displayName": "Rating", "description": "The rating (on a scale of 1-5) the user left.", "baseType": "type/Integer", "semanticType": "type/Score" } */
        type: "column",
        name: "rating",
        slug: "rating",
        jsType: "number",
        fieldId: 2222,
        tableId: 219
      },
      reviewer: {
        /* metadata: { "displayName": "Reviewer", "description": "The user who left the review", "baseType": "type/Text" } */
        type: "column",
        name: "reviewer",
        slug: "reviewer",
        jsType: "string",
        fieldId: 2221,
        tableId: 219
      }
    }
  }
} as const;

const metrics = { } as const;

const schema = {
  schemaVersion: 3,
  generatedAt: "2026-11-05T16:06:27.540403Z",
  metabase: {
    instanceUrl: "http://localhost:3000"
  },
  tables: tables,
  metrics: metrics
} as const;

export { schema };
