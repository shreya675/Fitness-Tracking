const conf = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DB_ID,

  appwriteUserInfoCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  appwriteWorkOutCollectionId: import.meta.env.VITE_APPWRITE_WORKOUT_COLLECTION_ID,
  appwriteDailyGoalsCollectionId: import.meta.env.VITE_APPWRITE_DAILYGOAL_COLLECTION_ID,
  appwriteWeeklyGoalsCollectionId: import.meta.env.VITE_APPWRITE_WEEKLYGOAL_COLLECTION_ID,
  appwriteWeightProgressCollectionId: import.meta.env.VITE_APPWRITE_WEIGHT_COLLECTION_ID,

  appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,

  exerciseApiNinja: import.meta.env.VITE_Exercise_API,
};

export default conf;

