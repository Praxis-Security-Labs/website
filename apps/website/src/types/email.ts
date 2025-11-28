/**
 * Email message types for Microsoft Graph API
 */

export interface EmailMessage {
  message: {
    subject: string;
    body: {
      contentType: 'text' | 'html';
      content: string;
    };
    toRecipients: Array<{
      emailAddress: {
        address: string;
        name?: string;
      };
    }>;
    from?: {
      emailAddress: {
        address: string;
        name?: string;
      };
    };
  };
  saveToSentItems?: boolean;
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface GraphApiTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
