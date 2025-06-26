"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analytics_service_1 = require("../services/analytics.service");
const analytics_dto_1 = require("../dto/analytics.dto");
let AnalyticsController = class AnalyticsController {
    analyticsService;
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    async getDashboardAnalytics(queryDto) {
        return await this.analyticsService.getDashboardAnalytics(queryDto);
    }
    async getMonthlyStats(queryDto) {
        return await this.analyticsService.getMonthlyStats(queryDto);
    }
    async getUserGrowth(queryDto) {
        return await this.analyticsService.getUserGrowthAnalytics(queryDto);
    }
    async getEnquiryAnalytics(queryDto) {
        return await this.analyticsService.getEnquiryAnalytics(queryDto);
    }
    async getInterestBreakdown(queryDto) {
        return await this.analyticsService.getInterestBreakdown(queryDto);
    }
    async getStreamBreakdown(queryDto) {
        return await this.analyticsService.getStreamBreakdown(queryDto);
    }
    async getDateRangeAnalytics(dateRangeDto) {
        return await this.analyticsService.getDateRangeAnalytics(dateRangeDto);
    }
    async getRecentActivity(limit = 10) {
        return await this.analyticsService.getRecentActivity(limit);
    }
    async getConversionMetrics(queryDto) {
        return await this.analyticsService.getConversionMetrics(queryDto);
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get comprehensive dashboard analytics',
        description: 'Returns all analytics data needed for the main dashboard',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Dashboard analytics retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getDashboardAnalytics", null);
__decorate([
    (0, common_1.Get)('monthly-stats'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get monthly user statistics',
        description: 'Returns month-wise breakdown of user registrations and enquiries',
    }),
    (0, swagger_1.ApiQuery)({ name: 'year', required: false, description: 'Year filter' }),
    (0, swagger_1.ApiQuery)({
        name: 'months',
        required: false,
        description: 'Number of months back',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Monthly statistics retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getMonthlyStats", null);
__decorate([
    (0, common_1.Get)('user-growth'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user growth analytics',
        description: 'Returns user growth data with growth rates over time',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User growth data retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getUserGrowth", null);
__decorate([
    (0, common_1.Get)('enquiry-analytics'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get enquiry form analytics',
        description: 'Returns detailed analytics about enquiry form submissions',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Enquiry analytics retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getEnquiryAnalytics", null);
__decorate([
    (0, common_1.Get)('interest-breakdown'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get interest-wise user breakdown',
        description: 'Returns distribution of users by their interests',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Interest breakdown retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getInterestBreakdown", null);
__decorate([
    (0, common_1.Get)('stream-breakdown'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get stream-wise user breakdown',
        description: 'Returns distribution of users by their educational streams',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Stream breakdown retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getStreamBreakdown", null);
__decorate([
    (0, common_1.Get)('date-range'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get analytics for specific date range',
        description: 'Returns analytics data for a custom date range',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Date range analytics retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.DateRangeDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getDateRangeAnalytics", null);
__decorate([
    (0, common_1.Get)('recent-activity'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get recent user activity',
        description: 'Returns recent user registrations and enquiries',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Number of records to return',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recent activity retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getRecentActivity", null);
__decorate([
    (0, common_1.Get)('conversion-metrics'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get conversion metrics',
        description: 'Returns metrics about enquiry to conversion rates',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Conversion metrics retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsQueryDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getConversionMetrics", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, swagger_1.ApiTags)('Analytics'),
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map