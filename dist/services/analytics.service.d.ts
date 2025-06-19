import { Model } from 'mongoose';
import { UserDocument } from '../schemas/user.schema';
import { AnalyticsQueryDto, DateRangeDto, DashboardAnalytics, MonthlyStats, UserGrowthData, EnquiryAnalytics, InterestAnalytics, StreamAnalytics } from '../dto/analytics.dto';
export declare class AnalyticsService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getDashboardAnalytics(queryDto: AnalyticsQueryDto): Promise<DashboardAnalytics>;
    private getOverviewStats;
    getMonthlyStats(queryDto: AnalyticsQueryDto): Promise<MonthlyStats[]>;
    getUserGrowthAnalytics(queryDto: AnalyticsQueryDto): Promise<UserGrowthData[]>;
    getEnquiryAnalytics(queryDto: AnalyticsQueryDto): Promise<EnquiryAnalytics[]>;
    getInterestBreakdown(queryDto: AnalyticsQueryDto): Promise<InterestAnalytics[]>;
    getStreamBreakdown(queryDto: AnalyticsQueryDto): Promise<StreamAnalytics[]>;
    getDateRangeAnalytics(dateRangeDto: DateRangeDto): Promise<{
        totalUsers: number;
        newUsers: number;
        totalEnquiries: number;
        importantUsers: number;
        averageEnquiriesPerUser: number;
        topInterests: InterestAnalytics[];
        topStreams: StreamAnalytics[];
    }>;
    getRecentActivity(limit: number): Promise<{
        recentUsers: any[];
        recentEnquiries: any[];
    }>;
    getConversionMetrics(queryDto: AnalyticsQueryDto): Promise<{
        totalEnquiries: number;
        uniqueUsers: number;
        repeatEnquiries: number;
        conversionRate: number;
        averageEnquiriesPerUser: number;
        importantUserPercentage: number;
    }>;
}
