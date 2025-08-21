# API Specification

Since this is a static website, APIs are primarily for form submissions and external integrations. The following describes the Cloudflare Workers API endpoints:

## REST API Specification

```yaml
openapi: 3.0.0
info:
  title: Praxis Navigator Website API
  version: 1.0.0
  description: Serverless functions for form processing and integrations
servers:
  - url: https://praxis-website.pages.dev/api
    description: Production API via Cloudflare Workers

paths:
  /forms/submit:
    post:
      summary: Submit lead generation form
      description: Process form submissions and trigger follow-up workflows
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LeadSubmission'
      responses:
        '200':
          description: Form submitted successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: true
                  leadId:
                    type: string
                    example: "lead_123abc"
                  message:
                    type: string
                    example: "Thank you for your submission"
        '400':
          description: Invalid form data
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'

  # Note: Authentication is handled via direct MSAL redirect to app.praxisnavigator.io
  # No local authentication endpoints needed

  /marketplace/redirect:
    get:
      summary: Redirect to Azure Marketplace
      description: Simple redirect to Azure Marketplace listing page
      parameters:
        - name: utm_source
          in: query
          schema:
            type: string
            description: Attribution tracking parameter
        - name: utm_campaign
          in: query
          schema:
            type: string
            description: Campaign tracking parameter
      responses:
        '302':
          description: Redirect to Azure Marketplace listing

components:
  schemas:
    LeadSubmission:
      type: object
      required: [type, contact, company, segment]
      properties:
        type:
          type: string
          enum: [demo, trial, contact, whitepaper]
        contact:
          $ref: '#/components/schemas/ContactInfo'
        company:
          $ref: '#/components/schemas/CompanyInfo'
        segment:
          type: string
          enum: [security-leaders, executives, managers, sat-teams]
        utm:
          $ref: '#/components/schemas/UTMParameters'
    
    ContactInfo:
      type: object
      required: [firstName, lastName, email]
      properties:
        firstName:
          type: string
          maxLength: 50
        lastName:
          type: string
          maxLength: 50
        email:
          type: string
          format: email
        phone:
          type: string
          pattern: '^\+?[\d\s\-\(\)]+$'
        title:
          type: string
          maxLength: 100
    
    CompanyInfo:
      type: object
      required: [name, size]
      properties:
        name:
          type: string
          maxLength: 100
        size:
          type: string
          enum: [1-50, 51-200, 201-1000, 1000+]
        industry:
          type: string
          maxLength: 100
        website:
          type: string
          format: uri
    
    UTMParameters:
      type: object
      properties:
        source:
          type: string
        medium:
          type: string
        campaign:
          type: string
        term:
          type: string
        content:
          type: string
    
    ErrorResponse:
      type: object
      properties:
        success:
          type: boolean
          example: false
        error:
          type: object
          properties:
            code:
              type: string
            message:
              type: string
            details:
              type: object
```

---
