#import "Appconfig.h"

@implementation Appconfig
RCT_EXPORT_MODULE()

- (NSDictionary *)managedConfig {
    return [NSDictionary dictionary];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAppconfigSpecJSI>(params);
}

@end
