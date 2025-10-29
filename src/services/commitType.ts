interface PayloadType {
  before: string;
  head: string;
  push_id: number;
  ref: string;
  repository_id: number;
}

export interface CommitType {
  type: string;
  payload: PayloadType;
  created_at: string;
}
