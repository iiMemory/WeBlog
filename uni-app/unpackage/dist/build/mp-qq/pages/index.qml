<block><view class="cu-card case"><block wx:for="{{$root.l0}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view class="margin list" style="overflow:hidden;"><block wx:if="{{index%4==3}}"><ad class="ad" unit-id="750221a1c0d4c6f021ab39df00a40ae7" type="feeds"></ad></block><navigator class="list__item" url="{{'/pages/post?cid='+item.$orig.cid+'&thumb='+item.$orig.thumb[0].str_value}}"><view class="image"><image src="{{item.$orig.thumb[0].str_value}}" mode="widthFix" lazy-load="{{true}}"></image><view class="cu-bar text-shadow bg-shadeBottom">{{item.$orig.title}}</view></view><view class="cu-list menu menu-avatar"><view class="cu-item" style="height:70rpx;min-height:70rpx;"><view class="text-gray text-sm flex justify-between align-center" style="width:100%;"><view><text class="color-base margin-right-sm">{{item.$orig.screenName}}</text>{{''+item.m0}}</view><view class="text-gray"><text class="icon-attentionfill margin-xs"></text>{{''+item.$orig.views+''}}<text class="icon-appreciatefill margin-xs"></text>{{''+item.$orig.likes+''}}<text class="icon-messagefill margin-xs"></text>{{''+item.$orig.commentsNum+''}}</view></view></view></view></navigator></view></block><view style="padding-bottom:50px;"><view class="action"><view class="{{['cu-load load-icon',isLoading?'loading':'over']}}"></view></view></view></view></block>