# Rosetta.SearchTransactionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | [**[BlockTransaction]**](BlockTransaction.md) | transactions is an array of BlockTransactions sorted by most recent BlockIdentifier (meaning that transactions in recent blocks appear first). If there are many transactions for a particular search, transactions may not contain all matching transactions. It is up to the caller to paginate these transactions using the max_block field. | 
**totalCount** | **Number** | total_count is the number of results for a given search. Callers typically use this value to concurrently fetch results by offset or to display a virtual page number associated with results. | 
**nextOffset** | **Number** | next_offset is the next offset to use when paginating through transaction results. If this field is not populated, there are no more transactions to query. | [optional] 


