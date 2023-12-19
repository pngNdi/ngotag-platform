export  interface UserInvitations {
  totalPages:number;
  userInvitationsData:UserInvitationsData[];
}
export  interface UserInvitationsData {
  orgRoles: OrgRole[];
  status: string;
  id: string;
  orgId: string;
  organisation: Organisation;
  userId: string;
}
export interface OrgRole {
  id: string;
  name: string;
  description: string;
}

export interface Organisation {
  id: string;
  name: string;
  logoUrl: string;
}

export interface UsersProfile {
    id?: string;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    supabaseUserId?: string;
    userOrgRoles?: object;
  }
  
  export interface OrgInvitations {
    id: string;
    userId: string;
    orgId?: string;
    organisation?: object;
    orgRoleId?: string;
    status: string;
    email?: string;
    orgRoles: string[];
  }
  
  export interface UserEmailVerificationDto {
    email: string;
    username?: string;
  }
  
  export interface userInfo {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isPasskey: boolean;
  }
  
  export interface AddPasskeyDetails {
    password: string;
  }

  export interface UpdateUserProfile {
    id: string;
    profileImg?: string;
    firstName: string;
    lastName: string;
    isPublic: boolean;
  }
  export interface PlatformSettings {
    externalIp: string;
    lastInternalId: string;
    sgApiKey: string;
    emailFrom: string;
    apiEndPoint: string;
    enableEcosystem: boolean;
    multiEcosystemSupport: boolean;
  }
  
  export interface ShareUserCertificate {
    schemaId: string;
    credentialId: string;
    attributes: Attribute[];
  }
  
  export interface Attribute {
    [key: string]: string;
    label: string;
  }
  
  export interface CheckUserDetails {
    isEmailVerified?: boolean;
    isFidoVerified?: boolean;
    isSupabase?: boolean;
    isExist?: boolean;
  }

  export interface UserCredentials {
    id: string;
    imageUrl?: string;
    credentialId?: string;
    createDateTime: Date;
    lastChangedDateTime: Date;
    deletedAt: Date;
  }