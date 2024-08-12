PB_GO_IMAGE_NAME=bloxroute/bdn-protobuf:v3.19.3-go

.PHONY: all test integration fmt
.PHONY: proto proto-build-gw proto-build-swagger proto-build-api proto-build-common-go
.PHONY: proto-docker proto-docker-push-go proto-docker-build-go proto-docker-push-js proto-docker-build-js
.PHONY: cred-github cred-solana data-accounts environment-dev

all: clean proto

clean:
	rm -rf js api common

proto: proto-build-api-go proto-build-common-go proto-build-swagger proto-build-gw proto-build-api-python

proto-build-gw:
	docker run -v $(CURDIR)/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc \
			--grpc-gateway_out ../out \
			--grpc-gateway_opt logtostderr=true \
			--grpc-gateway_opt paths=source_relative \
			api.proto

proto-build-swagger:
	docker run -v $(CURDIR)/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --openapiv2_out ../out --openapiv2_opt logtostderr=true api.proto
	mv api/api.swagger.json swagger-ui

proto-build-api-go:
	docker run -v $(CURDIR)/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --go_out=../out --go_opt=paths=source_relative  --go-grpc_out=../out --go-grpc_opt=paths=source_relative api.proto --platform linux/amd64

proto-build-api-jito:
	docker run -v $(CURDIR)/mev-protos-go:/go/protobuf/out \
			   -v $(CURDIR)/proto/mev-protos:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --go_out=../out --go_opt=paths=source_relative  --go-grpc_out=../out --go-grpc_opt=paths=source_relative auth.proto block.proto block_engine.proto bundle.proto packet.proto relayer.proto searcher.proto shared.proto shredstream.proto trace_shred.proto

proto-build-api-python:
	protoc \
		-I $(CURDIR)/proto \
		--python_betterproto_out=$(CURDIR)/python/src/bxsolana_trader_proto/ \
		$(CURDIR)/proto/api.proto

proto-build-common-go:
	docker run -v $(CURDIR)/common:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --go_out=../out --go_opt=paths=source_relative  --go-grpc_out=../out --go-grpc_opt=paths=source_relative common.proto

proto-docker: proto-docker-build-go proto-docker-build-js proto-docker-push-go proto-docker-push-js

proto-docker-push-go:
	docker push $(PB_GO_IMAGE_NAME)

proto-docker-build-go:
	cd proto && docker build . -f Dockerfile-go -t $(PB_GO_IMAGE_NAME) --platform linux/amd64


